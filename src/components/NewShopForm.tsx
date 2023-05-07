import React, {useState} from 'react';
import {useMutation} from "@apollo/client";
import {CREATE_SHOP, CreateShopData} from "@/queries/createShop";
import {useUser} from "@auth0/nextjs-auth0/client";
import Loader from "@/components/Loader";
import ErrorIndicator from "@/components/ErrorIndicator";

const btnStyle = `my-1 rounded-md bg-indigo-100 px-4 py-2 text-indigo-700 hover:bg-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`;
const labelStyle = `block text-sm font-medium text-gray-700`;
const inputStyle = `shadow-sm border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md`;

const NewShopForm = () => {
    const {user} = useUser()
    const [createNewShop, {loading, error, data}] = useMutation<CreateShopData>(CREATE_SHOP)

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        coverImg: '',
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        createNewShop({
            variables: {...formData, ownerID: user?.sub}
        })
            .then(() => alert('Shop created'))
            .catch((err) => console.error(err))
    }

    if (loading) return <Loader/>
    if (error) return <ErrorIndicator/>

    return (
        <form onSubmit={handleSubmit} className="bg-white w-full max-w-2xl h-full p-4">
            <label className={labelStyle}>Shop Name </label>
            <div className="mt-1 mb-3">
                <input
                    type="text"
                    name="name"
                    className={inputStyle}
                    onChange={handleChange}
                />
            </div>

            <label className={labelStyle}>Description </label>
            <div className="mt-1 mb-3">
                <input type="text" name="description" className={inputStyle} onChange={handleChange}/>
            </div>

            <label className={labelStyle}>Image URL </label>
            <div className="mt-1 mb-3">
                <input type="text" className={inputStyle} name="coverImg" onChange={handleChange}/>
            </div>
            <button disabled={loading} className={btnStyle} type="submit">Create</button>

        </form>
    )
}

export default NewShopForm;
