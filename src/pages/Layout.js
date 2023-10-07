import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
    const [showSidebar, setShowSideBar] = useState(false)
    const toggleSideBar = () => {
        setShowSideBar(!showSidebar)
    }
    return (
        <div>
            <div className='md:flex md:justify-'>
                <div className={` md:block ${!showSidebar ? 'hidden' : 'absolute'} `}>
                    <Sidebar />
                </div>

                <nav className="md:hidden">
                    <Navbar toggleSideBar={toggleSideBar} showSidebar={showSidebar} />
                </nav>

                <main className="flex-1">
                    {children}
                </main>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    );
}

export default Layout;