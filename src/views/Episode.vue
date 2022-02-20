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
	h3 \#{{episode.id}} - {{episode.name}}

	p
		q-icon.q-mr-sm(
			name='live_tv',
			size='sm'
		)
		| Episode: {{episode.episode}}
	p
		q-icon.q-mr-sm(
			name='event',
			size='sm'
		)
		| Date: {{episode.air_date}}

	h5 Characters

	q-list.q-list--intern.rounded-borders(
		bordered,
		separator
	)
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
				q-item-label {{character.name}}
				q-item-label(v-if='character.status !== "unknown"', caption) {{character.status}}
</template>

<script>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {useResult} from '@vue/apollo-composable';
import {getEpisode} from '@/apollo';

export default {
	setup() {
		const route = useRoute(),
			id = computed(() => route.params.id),
			{result, loading, error} = getEpisode(id),
			episode = useResult(result, null, data => data.episode),
			characters = useResult(result, null, data => data.episode.characters);

		return {
			id,
			episode,
			characters,
			loading
		};
	}
};
</script>
