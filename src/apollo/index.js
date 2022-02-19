import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client/core';
export {DefaultApolloClient} from '@vue/apollo-composable';

const httpLink = createHttpLink({
	uri: 'https://rickandmortyapi.com/graphql'
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link: httpLink,
	cache
});

export default apolloClient;
