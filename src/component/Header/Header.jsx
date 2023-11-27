import React, { useState } from 'react';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between items-center h-[80px] bg-slate-200 px-4 rounded'>
            <div className='flex gap-2'>
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <p className='text-lg font-bold'>nextPage</p>
            </div>
            <ul className='lg:flex hidden text-slate-700 tracking-wide space-x-5 font-bold'>
                <li><NavLink to='/'
                    className={({ isActive }) => (isActive ? 'text-sky-600' : 'default')}
                >Home</NavLink></li>
                <li><NavLink to='/book'
                    className={({ isActive }) => (isActive ? 'text-sky-600' : 'default')}
                >Book</NavLink></li>
                <li><NavLink to='/about'
                    className={({ isActive }) => (isActive ? 'text-sky-600' : 'default')}
                >About</NavLink></li>
            </ul>

            {/* Mobile nav section  */}
            <div className='lg:hidden'>
                <button onClick={() => setOpen(true)}>
                    <Bars3Icon className='h-6 w-6' />
                </button>
                {
                    open && (
                        <div className='absolute  top-0 right-0 w-full z-10 p-4'>
                            <div className='p-5 bg-slate-100 rounded shadow-2xl'>
                                <div className='flex items-center justify-between mb-4'>

                                    <div>
                                        <Link to='/' className='flex items-center'>
                                            <BoltIcon className='h-6 w-6 text-blue-500' />
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                nextPage
                                            </span>
                                        </Link>
                                    </div>

                                    {/* drop down munu close button  */}
                                    <div>
                                        <button onClick={() => setOpen(false)}>
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* mobile nav item section  */}
                                <nav>
                                    <ul>
                                        <li><NavLink to='/'
                                            className={({ isActive }) => (isActive ? 'text-sky-600' : 'default')}
                                        >Home</NavLink></li>
                                        <li><NavLink to='/book'
                                            className={({ isActive }) => (isActive ? 'text-sky-600' : 'default')}
                                        >Book</NavLink></li>
                                        <li><NavLink to='/about'
                                            className={({ isActive }) => (isActive ? 'text-sky-600' : 'default')}
                                        >About</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Header;