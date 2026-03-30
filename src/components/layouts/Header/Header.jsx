import logo from '../../../assets/logo.png';
import NavLinks from '../../../utilities/constants/links.js';
import ResHeader from '../../ui/ResHeader/ResHeader.jsx';
import { Menu, ShoppingCart } from 'lucide-react';

const Header = () => {
    const { main } = NavLinks;

    return (
        <>
            <header>
                <div className='w-full border-b border-[#F2F2F2]'>
                    <div className='w-full max-w-400 mx-auto px-5'>
                        <div className='flex items-center justify-between py-4'>
                            <div className='w-32.5 sm:w-37.5 md:w-45'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='hidden lg:block'>
                                <ul className='flex items-center justify-center gap-8'>
                                    {main.map(link => <li className='manrope text-base font-semibold' key={link.id}><a href="#" className='text-[#101727] transition duration-200 delay-150 hover:underline'>{link.name}</a></li>)}
                                </ul>
                            </div>
                            <div className='hidden items-center justify-center gap-4 lg:flex'>
                                <div className='w-5 h-5 flex items-center justify-center relative'>
                                    <ShoppingCart size={16}></ShoppingCart>
                                    <div className='w-4 h-4 absolute bg-white rounded-full flex items-center justify-center -top-1.5 -right-1.5'>
                                        <span className='manrope text-xs font-semibold text-[#101727]'>0</span>
                                    </div>
                                </div>
                                <button className='manrope text-base font-semibold text-[#101727] cursor-pointer transition duration-200 delay-150 hover:underline'>Login</button>
                                <button className='py-3 px-4 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] manrope text-base font-semibold text-white cursor-pointer'>Get Started</button>
                            </div>
                            <button className='cursor-pointer lg:hidden'>
                                <Menu color="#101727"></Menu>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <ResHeader></ResHeader>
        </>
    );
};

export default Header;