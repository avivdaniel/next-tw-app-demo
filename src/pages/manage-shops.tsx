import React from 'react';
import NewShopForm from "@/components/NewShopForm";
import {GetServerSideProps} from "next";
import {getAccessToken} from "@auth0/nextjs-auth0";
import {useUser} from "@auth0/nextjs-auth0/client";
import {useQuery} from "@apollo/client";
import {GET_SHOPS_BY_OWNER, GetShopsByOwnerQueryResponse} from "@/graphql/getShopsByOwner";
import Loader from "@/components/Loader";
import ErrorIndicator from "@/components/ErrorIndicator";
import ShopList from "@/components/ShopList";

interface ManageShopsProps {
    accessToken: string

}

const ContainerStyles = 'w-full p-2';
const TitleStyles = 'text-xl font-bold mb-4';

const ManageShops = ({accessToken}: ManageShopsProps) => {
    const {user} = useUser();
    const {data, loading, error, refetch} = useQuery<GetShopsByOwnerQueryResponse>(GET_SHOPS_BY_OWNER, {
        variables: {ownerID: user?.sub}
    });

    const ownerShops =
        loading ? <Loader/>
            : error ? <ErrorIndicator/>
                : data?.getShopsByOwnerID.data ?
                    <ShopList shops={data.getShopsByOwnerID.data}/> : null
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className={ContainerStyles}>
                <h3 className={TitleStyles}>Create a new shop</h3>
                <NewShopForm accessToken={accessToken} onSubmit={refetch}/>
            </div>
            <div className={ContainerStyles}>
                <h3 className={TitleStyles}>Your current shops</h3>
                {ownerShops}
            </div>
        </div>
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