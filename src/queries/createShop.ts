import {gql} from "@apollo/client";

export const CREATE_SHOP = gql`
    mutation CreateShop(
        $name:String!
        $description: String!
        $ownerID: String!
        $coverImg: String!
        
    ) {
        createShop(data: {
            name: $name
            description: $description
            ownerID: $ownerID
            coverImg: $coverImg
            products: []
        }) {
            _id
            name
        }
    }
`;

export interface CreateShopData {
    createShop: {
        _id: string;
        name: string;
    };
}