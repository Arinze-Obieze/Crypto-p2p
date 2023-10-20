import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
    const [theme, SetTheme] = useState("dark")

    // useEffect(()=>{
    //     if(window.matchMedia('(prefers-color-scheme:dark)').matches){
    //         SetTheme('light')
    //     }

    // })

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])


    const handleThemeSwitch = () => {
        SetTheme(theme === "dark" ? "light" : "dark")
    }

    const [showSidebar, setShowSideBar] = useState(false)
    const toggleSideBar = () => {
        setShowSideBar(!showSidebar)
    }
    return (
        <div>
            <div className='md:flex md:justify-'>
                <div className={` md:block ${!showSidebar ? 'hidden' : 'absolute z-50'} `}>
                    <Sidebar className='' />
                </div>

                <nav className="md:hidden">
                    <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} toggleSideBar={toggleSideBar} showSidebar={showSidebar} />
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