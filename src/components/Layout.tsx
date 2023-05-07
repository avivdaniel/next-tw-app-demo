import {ReactNode} from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Nav/>
            <main
                className="flex-1 flex flex-col items-center justify-between container mx-auto p-4">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;