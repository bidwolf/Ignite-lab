import { ApolloClient, InMemoryCache } from "@apollo/client";
const API_URL="https://api-sa-east-1.graphcms.com/v2/cl4oenrc924cn01xiezv89e0m/master"; 
export const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache()
})