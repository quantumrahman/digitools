import navLinks from '../../../utilities/constants/links.js';
import { ShoppingCart, X } from 'lucide-react';

const ResHeader = () => {
    const { main } = navLinks;

    return (
        <>
            <div className={`absolute w-full max-w-100 min-h-screen bg-white/50 backdrop-blur-md top-0 right-0 z-20 transform transition-transform duration-300 p-6.5`}>
                <div className='flex items-center justify-between'>
                    <button className='cursor-pointer'>
                        <X color="#101727"></X>
                    </button>
                    <div className='w-5 h-5 flex items-center justify-center relative'>
                        <ShoppingCart size={16}></ShoppingCart>
                        <div className='w-4 h-4 absolute bg-white rounded-full flex items-center justify-center -top-1.5 -right-1.5'>
                            <span className='manrope text-xs font-semibold text-[#101727]'>0</span>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-12.5 flex justify-center flex-col gap-5'>
                    <ul className='flex justify-center flex-col gap-5'>
                        {main.map(link => <li className='manrope text-base font-semibold' key={link.id}><a href="#" className='text-[#101727] transition duration-200 delay-150 hover:underline'>{link.name}</a></li>)}
                    </ul>
                    <a className='manrope text-base font-semibold text-[#101727] cursor-pointer transition duration-200 delay-150 hover:underline'>Login</a>
                    <button className='mt-3 py-3 px-4 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] manrope text-base font-semibold text-white cursor-pointer'>Get Started</button>
                </div>

            </div>
        </>
    );
};

export default ResHeader;