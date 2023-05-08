import React from 'react';
import {useRouter} from "next/router";

const Products = () => {
    const router = useRouter();
    const {id} = router.query
    return (
        <div>
            Hello shop products store {id}
        </div>
    );
};

export default Products;