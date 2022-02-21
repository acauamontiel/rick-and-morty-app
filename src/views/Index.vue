<template lang="pug">
q-page
	h4.text-center Rick and Morty App

	q-form(@submit.prevent='onSubmitSearch')
		q-input(
			v-model='search'
			@clear='onSubmitSearch',
			label='Search'
			placeholder='Search for a character'
			clearable,
			rounded,
			outlined
		)

	.q-my-lg
		q-btn(
			@click='filtersToggle = !filtersToggle',
			size='sm'
		)
			q-icon.q-mr-xs(name='filter_alt')
			| Toggle filter

		.q-mt-md(v-if='filtersToggle')
			.q-gutter-sm.flex.items-center
				label.text-caption Status:
				q-radio(
					v-model='filters.status',
					val='alive',
					checked-icon='favorite',
					label='Alive'
				)
				q-radio(
					v-model='filters.status',
					val='dead',
					checked-icon='favorite_border',
					label='Dead'
				)
				q-radio(
					v-model='filters.status',
					val='unknown',
					checked-icon='question_mark',
					label='Unknown'
				)
			.q-gutter-sm.flex.items-center
				label.text-caption Gender:
				q-radio(
					v-model='filters.gender',
					val='male',
					checked-icon='male',
					label='Male'
				)
				q-radio(
					v-model='filters.gender',
					val='female',
					checked-icon='female',
					label='Female'
				)
				q-radio(
					v-model='filters.gender',
					val='genderless',
					checked-icon='transgender',
					label='Genderless'
				)
				q-radio(
					v-model='filters.gender',
					val='unknown',
					checked-icon='question_mark',
					label='Unknown'
				)

	.flex.flex-center.q-mt-md(v-if='hasQuery')
		q-btn(
			@click='clearParams',
			size='sm',
			outline
		) Clear search

	p.q-mt-md(v-if='error') Character not found

	q-spinner-ball(v-else-if='loading')
	template(v-else)
		q-list.q-mt-md.rounded-borders(bordered, padding, separator)
			q-item(
				v-for='character in characters',
				:key='character.id',
				:to='`/character/${character.id}`',
				clickable,
				v-ripple
			)
				q-item-section(avatar, top)
					q-avatar(size='64px')
						q-img(:src='character.image', loading='lazy')

				q-item-section
					q-item-label(lines='1') {{character.name}}
					q-item-label(caption)
						.row.items-center
							q-icon(name='live_tv')
							span.q-ml-xs {{character.episode.length}} episodes

				q-item-section(side)
					q-icon(
						v-if='character.gender !== "unknown"',
						:name='getGenderIcon(character.gender)',
						size='sm'
					)

		.flex.flex-center.q-my-md
			q-pagination(
				v-model='params.page',
				@update:model-value='updatePage',
				:max='info.pages',
				:max-pages='5',
				color='white',
				active-text-color='black',
				boundary-links,
				direction-links,
				unelevated
			)
</template>

<script>
import {ref, computed} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useResult} from '@vue/apollo-composable';
import {getCharacterList} from '@/apollo';
import {getGenderIcon} from '@/utils';

export default {
	setup() {
		const route = useRoute(),
			router = useRouter(),
			search = ref(''),
			filtersToggle = ref(false),
			filters = ref({
				status: null,
				gender: null
			}),
			params = ref({
				page: 1,
				name: null,
				status: null,
				gender: null
			}),
			{result, loading, error} = getCharacterList(params),
			info = useResult(result, null, data => data.characters.info),
			characters = useResult(result, null, data => data.characters.results),
			hasQuery = computed(() => route.query.name || route.query.status || route.query.gender);

		function setParams() {
			search.value = route.query?.name;
			params.value.name = route.query?.name;
			params.value.status = route.query?.status;
			params.value.gender = route.query?.gender;
			params.value.page = parseInt(route.query?.page) || 1;
			filtersToggle.value = route.query.status || route.query.gender;
			filters.value.status = route.query?.status;
			filters.value.gender = route.query?.gender;
		}

		function clearParams() {
			filtersToggle.value = false;
			search.value = null;
			router.push({name: 'index'});
		}

		function pushRoute(page = 1) {
			router.push({
				name: 'index',
				query: {
					page: page,
					name: search.value,
					status: route.query.status,
					gender: route.query.gender
				}
			});
		}

		function onSubmitSearch() {
			pushRoute();
		}

		function updatePage(page) {
			pushRoute(page);
		}

		setParams();

		return {
			search,
			params,
			info,
			characters,
			loading,
			error,
			filtersToggle,
			filters,
			hasQuery,
			setParams,
			clearParams,
			onSubmitSearch,
			updatePage,
			getGenderIcon
		};
	},
	watch: {
		$route(to) {
			if (to.name !== 'index') {
				return;
			}

			this.setParams();
		},
		params: {
			handler() {
				window.scrollTo(0, 0);
			},
			deep: true
		},
		filters: {
			handler(filters) {
				this.$router.push({
					name: 'index',
					query: {
						page: 1,
						name: this.params.name,
						status: filters.status,
						gender: filters.gender
					}
				});
			},
			deep: true
		}
	}
};
</script>
