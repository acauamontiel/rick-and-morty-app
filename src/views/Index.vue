<template lang="pug">
q-page
	h4.text-center Rick and Morty App

	q-form(@submit.prevent='doSearch')
		q-input(
			v-model='search'
			@clear='doSearch',
			label='Search'
			placeholder='Search for a character'
			clearable,
			rounded,
			outlined
		)

	.flex.flex-center.q-mt-md
		q-btn(
			v-if='params.name',
			@click='clearSearch',
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
				clickable,
				v-ripple
			)
				q-item-section(avatar, top)
					q-avatar(size='64px')
						img(:src='character.image')

				q-item-section
					q-item-label(lines='1') {{character.name}}
					q-item-label(caption)
						.row.items-center
							q-icon(name='live_tv')
							span.q-ml-xs {{character.episode.length}} episodes

				q-item-section(side)
					q-icon(
						v-if='character.gender !== "unknown"',
						:name='character.gender.toLowerCase()',
						size='sm'
					)

		.flex.flex-center.q-my-md
			q-pagination(
				v-model='params.page',
				:max='info.pages',
				max-pages='5',
				color='white',
				active-text-color='black',
				boundary-links,
				direction-links,
				unelevated
			)
</template>

<script>
import {ref} from 'vue';
import {useResult} from '@vue/apollo-composable';
import {getCharacterList} from '@/apollo';

export default {
	setup() {
		const search = ref(''),
			params = ref({page: 1, name: ''}),
			{result, loading, error} = getCharacterList(params),
			info = useResult(result, null, data => data.characters.info),
			characters = useResult(result, null, data => data.characters.results);

		function doSearch() {
			params.value.name = search.value;
			params.value.page = 1;
		}

		function clearSearch() {
			search.value = '';
			doSearch();
		}

		return {
			search,
			params,
			info,
			characters,
			loading,
			error,
			doSearch,
			clearSearch
		};
	}
};
</script>
