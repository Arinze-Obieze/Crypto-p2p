import { GiLightFighter } from 'react-icons/gi';
import { IoMenuOutline, IoNotificationsOutline } from 'react-icons/io5';

const Navbar = ({ setIsSidebar, isSidebar }) => {

    return (
        <div>
            <nav className='flex place-items-center py-8 max-[]: shadow-md justify-between px-8'>
                <div className='flex place-items-center space-x-2'>
                    <img src="/logo.avif" alt="logo" className='w-12 rounded-full' />
                    <h1 className='font-serif text-xl'>Welcome Philip</h1>
                </div>

                <div className='flex w-1/5 justify-between place-items-center cursor-pointer'>
                    <span style={{ position: 'relative' }}>
                        <IoNotificationsOutline className=' text-xl' />
                        <h1 className='text-white rounded-full text-sm px-1 bg-red-600' style={{ position: 'absolute', top: '-10px', right: '-10px' }}>12</h1>
                    </span>
                    <span style={{ position: 'relative' }}>
                        <GiLightFighter className=' text-xl' />
                        <h1 className='text-white rounded-full text-sm px-1 bg-red-600' style={{ position: 'absolute', top: '-10px', right: '-10px' }}>12</h1>
                    </span>

                    <menu className='cursor-pointer hover:border-gray-200 hover:border-2'>
                        <IoMenuOutline className='text-4xl '
                            onClick={(e) => { setIsSidebar(!isSidebar) }}
                        />

                    </menu>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
