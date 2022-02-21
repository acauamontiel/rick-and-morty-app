import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client/core';
import {DefaultApolloClient, useQuery} from '@vue/apollo-composable';
import gql from 'graphql-tag';

const httpLink = createHttpLink({
	uri: 'https://rickandmortyapi.com/graphql'
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link: httpLink,
	cache
});

export {DefaultApolloClient};
export default apolloClient;

export function getCharacterList(variables) {
	return useQuery(gql`
		query getCharacterList($page: Int, $name: String, $status: String, $gender: String) {
			characters(page: $page, filter: {
				name: $name
				status: $status
				gender: $gender
			}) {
				info {
					count
					pages
				}
				results {
					id
					name
					image
					gender
					episode {
						id
					}
				}
			}
		}
	`, variables);
}

export function getCharacter(id) {
	return useQuery(gql`
		query getCharacter($id: ID!) {
			character(id: $id) {
				id
				name
				image
				gender
				status
				species
				origin {
					id
					name
				}
				episode {
					id
					name
					episode
				}
			}
		}
	`, {id});
}

export function getEpisode(id) {
	return useQuery(gql`
		query getEpisode($id: ID!) {
			episode(id: $id) {
				id
				name
				episode
				air_date
				characters {
					id
					name
					image
					status
				}
			}
		}
	`, {id});
}
