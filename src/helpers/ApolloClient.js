import { ApolloClient, gql, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { sendMessageToBackend } from './helpers';

const axios = require('axios').default;

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_HOST + "/graphql"
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            sendMessageToBackend(
                `GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`,true
            )
        );

    if (networkError) {
        let { response } = operation.getContext()

        if (response) {
            sendMessageToBackend("Could not connect to GraphQL: " + networkError, true);
        } else {
            // No response received, user is probably attempting to navigate away during a data fetch
            const shouldUseRedirect = false;
            sendMessageToBackend("Could not connect to GraphQL: " + networkError, shouldUseRedirect);
        }
    };
});

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
    fetchOptions: {
        fetchOptions: { fetch },
        mode: 'no-cors',
    },
});

export const fetchAtlasMessages = async () => {
    let query = gql`
        query {
            getAtlasMessages {
                id
                message
                startDate
                endDate
                application
            }
        }`;
    const response = await apolloClient.query({
        query: query,
        fetchPolicy: 'network-only'
    });
    if (response.data && response.data.getAtlasMessages) {
        return response.data.getAtlasMessages;
    }else {
        sendMessageToBackend("Could not retrieve Atlas messages: " + response.error);
    }
}
