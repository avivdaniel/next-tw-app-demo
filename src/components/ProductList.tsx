import React from 'react';
import {Product} from "@/types";

const PRODUCT_DEFAULT_IMAGE_URL = "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg";
const ProductItem = ({imageUrl, description, price, name}: Product) => {
    return (
        <div className="group relative">
            <div
                className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={imageUrl || PRODUCT_DEFAULT_IMAGE_URL}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm font-bold text-indigo-600 text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0 left-2">
                                {name}
                            </span>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${price}</p>
            </div>
        </div>
    );
};


const ProductList = ({products}: { products: Product[] }) => {
    return (
        <div className="bg-white w-full">
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-2xl mb-14 font-bold tracking-tight text-gray-900 lg:text-4xl">Customers also
                    purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map(product => {
                        return <ProductItem key={product._id} {...product}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductList;