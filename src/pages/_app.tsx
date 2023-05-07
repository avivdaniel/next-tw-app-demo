import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from '@/components/Layout'
import {ApolloProvider} from "@apollo/client";
import {UserProvider} from '@auth0/nextjs-auth0/client';
import {client} from "../../gqlClient";

export default function App({Component, pageProps}: AppProps) {
    return <UserProvider>
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    </UserProvider>
}
