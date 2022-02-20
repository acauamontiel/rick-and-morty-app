<template lang="pug">
q-btn(
	to='/',
	size='sm',
	outline
)
	q-icon.q-mr-sm(name='home')
	| Back home

q-spinner-ball(v-if='loading')
q-page(v-else)
	h3 {{character.name}}
	.row.q-col-gutter-md
		.col-12.col-sm-6.col-md-4
			q-img.rounded-borders(:src='character.image', loading='lazy')
		.col-12.col-sm-6.col-md-8
			p
				q-icon.q-mr-sm(
					name='monitor_heart',
					size='sm'
				)
				| Status: {{character.status}}
			p(v-if='character.gender !== "unknown"')
				q-icon.q-mr-sm(
					:name='character.gender.toLowerCase()',
					size='sm'
				)
				| Gender: {{character.gender}}
			p
				q-icon.q-mr-sm(
					name='psychology',
					size='sm'
				)
				| Species: {{character.species}}
			p
				q-icon.q-mr-sm(
					name='public',
					size='sm'
				)
				| Origin: {{character.origin.name}}
			p
				q-icon.q-mr-sm(
					name='live_tv',
					size='sm'
				)
				| Episodes: {{character.episode.length}}


	h5 Episodes

	q-list.q-list--intern.rounded-borders(
		bordered,
		separator
	)
		q-item(
			v-for='episode in character.episode',
			:to='`/episode/${episode.id}`',
			clickable,
			v-ripple
		)
			q-item-section
				q-item-label \#{{episode.id}} - {{episode.name}}
				q-item-label(caption) {{episode.episode}}
</template>

<script>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {useResult} from '@vue/apollo-composable';
import {getCharacter} from '@/apollo';

export default {
	setup() {
		const route = useRoute(),
			id = computed(() => route.params.id),
			{result, loading, error} = getCharacter(id),
			character = useResult(result);

		return {
			id,
			character,
			loading
		};
	}
};
</script>
