import {gql} from "@apollo/client";
import {Shop} from '../types';
export const GET_SHOPS_BY_OWNER = gql`
    query getShopsByOwnerID($ownerID:String!) {
        getShopsByOwnerID(ownerID: $ownerID) {
            data {
                _id
                name
                description
                coverImg
            }
        }
    }
`;

export interface GetShopsByOwnerQueryResponse {
    getShopsByOwnerID: {
        data: Shop[];
    };
}