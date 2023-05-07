import React from 'react';
import NewShopForm from "@/components/NewShopForm";
import {GetServerSideProps} from "next";
import {getAccessToken} from "@auth0/nextjs-auth0";

interface ManageShopsProps {
    accessToken: string

}

const ManageShops = ({accessToken}: ManageShopsProps) => {
    return (
        <NewShopForm accessToken={accessToken}/>
    );
};

export default ManageShops;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {accessToken} = await getAccessToken(context.req, context.res) as string;
    return {
        props: {
            accessToken
        }
    }
};