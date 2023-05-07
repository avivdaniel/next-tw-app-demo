import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from '@/components/Layout'
import {ApolloProvider} from "@apollo/client";
import {client} from "../../gqlClient";

export default function App({Component, pageProps}: AppProps) {
    return <ApolloProvider client={client}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
}
