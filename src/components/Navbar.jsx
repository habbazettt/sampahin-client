import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen((prev) => !prev)
    }

    return (
        <nav className='bg-primary shadow-lg fixed top-0 left-0 w-full z-50'>
            <div className='mx-auto px-4 sm:px-5 lg:px-8 py-2'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-end gap-2 md:gap-4'>
                        <img
                            src='/sampahin.png'
                            width={160}
                        />
                    </div>

                    {/* Navlinks */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <ul className='flex justify-center items-center gap-3 xl:gap-6'>
                                <li className='text-white px-3 py-2 duration-200 ease-in hover:text-primary hover:bg-white rounded-md cursor-pointer'><Link to="/">Beranda</Link></li>
                                <li className='text-white px-3 py-2 duration-200 ease-in hover:text-primary hover:bg-white rounded-md cursor-pointer'><Link to="/histories">Histori</Link></li>
                                <li className='text-white px-3 py-2 duration-200 ease-in hover:text-primary hover:bg-white rounded-md cursor-pointer'><Link to="/articles">Artikel</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Hamburger */}
                    <div className='mr-[2px] flex md:hidden'>
                        <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-white text-xl hover:text-tertiary  focus:outline-none ring-2 focus-within:ring-offset-1 focus:ring-offset-primary ease-in-out duration-300'>
                            <span className='sr-only'>Open Main Menu</span>
                            {open == true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                open && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <ul className='flex flex-col justify-center items-center gap-4'>
                                <li className='text-white px-3 py-2 duration-200 ease-in hover:text-primary hover:bg-white rounded-md'>Beranda</li>
                                <li className='text-white px-3 py-2 duration-200 ease-in hover:text-primary hover:bg-white rounded-md'>Histori</li>
                                <li className='text-white px-3 py-2 duration-200 ease-in hover:text-primary hover:bg-white rounded-md'>Artikel</li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar