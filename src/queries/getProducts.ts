import {gql} from "@apollo/client";
import {Product} from "@/types";

export const GET_PRODUCTS = gql`
    query {
        getAllProducts {
            data {
                _id
                name
                description
                price
                shop {
                    _id
                }
            }
        }
    }
`;

export interface GetProductsData {
    getAllProducts: {
        data: Product[];
    };
}