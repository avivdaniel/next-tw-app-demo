import Link from 'next/link';
import {useUser} from "@auth0/nextjs-auth0/client";

const Nav = () => {
    const {user, isLoading} = useUser();
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center ">
                <div className="text-white text-xl font-bold">
                    <Link href="/">
                        My Website
                    </Link>
                    {user && <span className="text-sm text-gray-400"> - {`Hello ${user.name}`}</span>}
                </div>
                <ul className="flex items-center space-x-4 text-white">
                    <li className="hover:text-gray-200">
                        <Link href="/cart">
                            Cart
                        </Link>
                    </li>
                    <li className="hover:text-gray-200 border-2 border-indigo-600 p-2 rounded">
                        {!user
                            ? <a href="/api/auth/login">Login as Vendor</a>
                            : <a href="/api/auth/logout">Logout</a>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;