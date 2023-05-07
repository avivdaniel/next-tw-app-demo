import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center ">
                <div className="text-white text-xl font-bold">
                    <Link href="/">
                        My Website
                    </Link>
                </div>
                <ul className="flex space-x-4 text-white">
                    <li className="hover:text-gray-200">
                        <Link href="/cart">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;