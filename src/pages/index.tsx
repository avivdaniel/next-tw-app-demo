import {useQuery} from "@apollo/client";
import ProductList from "@/components/ProductList";
import {GET_PRODUCTS, GetProductsData} from "@/queries/getProducts";
import Loader from "@/components/Loader";
import NoProductsMessage from "@/components/NoProductsMessage";
import ErrorIndicator from "@/components/ErrorIndicator";

export default function Home() {
    const {data, loading, error} = useQuery<GetProductsData>(GET_PRODUCTS);
    const products = data?.getAllProducts.data;

    if (loading) return <Loader/>;

    if (error) return <ErrorIndicator/>;

    if (!products) return <NoProductsMessage/>;


    return <ProductList products={products}/>
}
