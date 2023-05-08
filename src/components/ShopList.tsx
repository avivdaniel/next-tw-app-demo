import {Product, Shop} from "@/types";
import React from "react";

const ShopItem = ({name, coverImg}: Shop) => {
    return (
        <div className="group relative">
            <div
                className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={coverImg}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <div className="text-sm">
                            <span className="absolute inset-x-0 top-0 p-2 flex w-full justify-around">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add Product</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Delete Shop</button>
                            </span>
                    </div>
                    <p className="mt-1 text-md text-gray-500">{name}</p>
                </div>
            </div>
        </div>
    );
};
const ShopList = ({shops}: { shops: Shop[] }) => {
    return (
        <div className="w-full">
            <div className="mx-auto">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
                    {shops.map(shop => {
                        return <ShopItem {...shop}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ShopList;