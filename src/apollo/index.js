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
		query getCharacterList($page: Int, $name: String) {
			characters(page: $page, filter: {name: $name}) {
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
