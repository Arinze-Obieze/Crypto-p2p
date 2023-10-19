import { useState } from "react";
import Navbar from "./component/NavBar";
import Sidebar from "./component/Sidebar";

const Layout = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false)

    return (
        <>
            <menu>
                <menu className={`fixed max-[760px]: 
                ${isSidebar
                        ? ''
                        : 'hidden'}
                `}>
                    <Sidebar />
                </menu>
                <nav>
                    <Navbar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
                </nav>
            </menu>
            {children}

        </>
    );
}

export default Layout;