import React from 'react';
import { AiOutlineWallet } from 'react-icons/ai';
import { BsBank } from 'react-icons/bs';
import { PiHandCoinsBold } from 'react-icons/pi';
import { RiContractLeftRightFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


function MenuItem({ icon, text }) {
    return (
        <div className="w-full flex items-center gap-x-1.5 group select-none">
            <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-yellow-600 transition-all duration-300"></div>
            </div>
            <div className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm" href="#">
                {icon}
                <span className="font-QuicksandMedium">{text}</span>
            </div>
        </div>
    );
}



function Sidebar() {
    return (
        <aside className="w-72 bg-gray-100 dark:bg-gray-900 dark:text-gray-200 border-r-2 border-gray-200 min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7">
            {/* Menu items */}
            <div className="w-full pr-3 flex flex-col gap-y-1 fill-gray-500 text-sm">

                <div className="font-QuicksandMedium pl-4 text-xs text-[11px] uppercase">Menu</div>

                <Link to={'/'}>
                    <MenuItem icon={<svg className="h-5 w-5 dark:!fill-blue-500 !fill-yellow-500 group-hover:fill-yellow-600 dark:!fill-blue-500  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
                    </svg>} text="Home" />
                </Link>

                <Link to={'/referral'}>
                    <MenuItem icon={<svg className="h-5 w-5 group-hover:fill-yellow-600 dark:!fill-blue-500 dark:fill-gray-600  transition-colors duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM17 13H11V7H13V11H17V13Z"></path>
                    </svg>} text="Referral" />
                </Link>
            </div>

            {/* Account */}
            <div className="w-full pr-3 flex flex-col gap-y-1 fill-gray-500 text-sm">
                <div className="font-QuicksandMedium pl-4  text-xs text-[11px] uppercase">Account</div>

                <Link to={'/account-overview'}>
                    <MenuItem icon={<BsBank className="h-5 w-5 group-hover:fill-yellow-600 dark:!fill-blue-500 dark:fill-gray-600  transition-colors duration-200" />} text="Account Overview" />
                </Link>

                <Link to={'/balance'}>
                    <MenuItem icon={<AiOutlineWallet className="h-5 w-5 group-hover:fill-yellow-600 dark:!fill-blue-500 dark:fill-gray-600  transition-colors duration-200" />} text="Balance" />
                </Link>

                <Link to={'/withdraw'}>
                    <MenuItem icon={<svg className="h-5 w-5 group-hover:fill-yellow-600 dark:!fill-blue-500 dark:fill-gray-600  transition-colors duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.48891 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16 5.088C16.2742 5.23078 16.5132 5.38736 16.7429 5.557L18.5809 4.972C19.0286 4.82967 19.515 5.01816 19.7499 5.425L21.5699 8.578C21.8023 8.98548 21.7223 9.49951 21.3769 9.817L19.9519 11.117C20.0167 11.7059 20.0167 12.3001 19.9519 12.889L21.3769 14.189C21.7223 14.5065 21.8023 15.0205 21.5699 15.428L19.7499 18.581C19.515 18.9878 19.0286 19.1763 18.5809 19.034L16.7429 18.449C16.5103 18.6203 16.2687 18.7789 16.0189 18.924C15.7567 19.0759 15.4863 19.2131 15.2089 19.335L14.7959 21.214C14.6954 21.6726 14.2894 21.9996 13.8199 22ZM11.9959 8C9.78678 8 7.99592 9.79086 7.99592 12C7.99592 14.2091 9.78678 16 11.9959 16C14.2051 16 15.9959 14.2091 15.9959 12C15.9959 9.79086 14.2051 8 11.9959 8Z"></path>
                    </svg>} text="Withdraw" />
                </Link>

                <Link to={'/deposit'}>
                    <MenuItem icon={<PiHandCoinsBold className="h-5 w-5 group-hover:fill-yellow-600 dark:!fill-blue-500 dark:fill-gray-600  transition-colors duration-200" />} text="Deposit" />
                </Link>

                <Link to={'/convert'}>
                    <MenuItem icon={<RiContractLeftRightFill className="h-5 w-5 group-hover:fill-yellow-600 dark:group-hover:!fill-blue-500 dark:fill-gray-600  transition-colors duration-200" />} text="Convert" />
                </Link>
            </div>
            {/* Profile items */}
            <div className="w-full pr-3 flex flex-col gap-y-1 fill-gray-500 text-sm">

                <div className="font-QuicksandMedium pl-4  text-xs text-[11px] uppercase">Profile</div>

                <Link to={'/profile'}>
                    <MenuItem icon={<svg className="h-5 w-5 group-hover:fill-yellow-600 dark:!fill-blue-500 dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path>
                        <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path>
                    </svg>} text="Edit Profile" />
                </Link>

                <MenuItem icon={<svg className="h-5 w-5 group-hover:fill-yellow-600 dark:!fill-blue-500 dark:fill-gray-600  transition-colors duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.48891 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16 5.088C16.2742 5.23078 16.5132 5.38736 16.7429 5.557L18.5809 4.972C19.0286 4.82967 19.515 5.01816 19.7499 5.425L21.5699 8.578C21.8023 8.98548 21.7223 9.49951 21.3769 9.817L19.9519 11.117C20.0167 11.7059 20.0167 12.3001 19.9519 12.889L21.3769 14.189C21.7223 14.5065 21.8023 15.0205 21.5699 15.428L19.7499 18.581C19.515 18.9878 19.0286 19.1763 18.5809 19.034L16.7429 18.449C16.5103 18.6203 16.2687 18.7789 16.0189 18.924C15.7567 19.0759 15.4863 19.2131 15.2089 19.335L14.7959 21.214C14.6954 21.6726 14.2894 21.9996 13.8199 22ZM11.9959 8C9.78678 8 7.99592 9.79086 7.99592 12C7.99592 14.2091 9.78678 16 11.9959 16C14.2051 16 15.9959 14.2091 15.9959 12C15.9959 9.79086 14.2051 8 11.9959 8Z"></path>
                </svg>} text="Settings" />

                <MenuItem className="pb-8 " icon={<svg className="h-5 w-5 group-hover:fill-yellow-600 dark:!fill-blue-500   dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 21H5C3.89543 21 3 20.1046 3 19V15H5V19H19V5H5V9H3V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM11 16V13H3V11H11V8L16 12L11 16Z"></path>
                </svg>} text="Log Out" />
            </div>
        </aside>
    );
}

export default Sidebar;
