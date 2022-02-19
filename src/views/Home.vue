<template>
	<h1 v-if="loading">Loading...</h1>
	<div v-else>
		<img :src="result.character.image">
		<h1>{{result.character.name}}</h1>
	</div>
</template>

<script>
	import {useQuery} from '@vue/apollo-composable';
	import gql from 'graphql-tag';

	export default {
		setup() {

			const {result, loading} = useQuery(gql`
				query {
					character(id: 1) {
						name
						image
					}
				}
			`);

			return {result, loading};
		}
	};
</script>
