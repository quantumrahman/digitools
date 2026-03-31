import BtnIcon from '../../../assets/play.png';
import ButtonPrimary from "../ButtonPrimary/Button.jsx";
import Bannar from '../../../assets/banner.png';

const HomeSection = () => {
    return (
        <>
            <div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='w-full py-21.25 flex items-center justify-between gap-15'>
                    <div className='w-auto max-w-160 flex justify-center flex-col'>
                        <div className='w-full max-w-73.75 bg-[#E1E7FF] px-4 py-2 rounded-full flex items-center justify-center gap-1.25'>
                            <div className='w-4 h-4 flex items-center justify-center bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 rounded-full'>
                                <div className='w-3 h-3 flex items-center justify-center bg-linear-to-r from-[#4F39F6]/60 to-[#9514FA]/60 rounded-full'>
                                    <div className='w-1.5 h-1.5 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'></div>
                                </div>
                            </div>
                            <span className='manrope text-base font-medium text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text'>New: AI-Powered Tools Available</span>
                        </div>
                        <div className='w-full space-y-4 mt-4'>
                            <h1 className='manrope text-7xl font-extrabold text-[#101727] leading-21'>Supercharge Your Digital Workflow</h1>
                            <p className='w-150 manrope text-lg font-normal text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>
                        </div>
                        <div className='w-full flex items-center gap-4 mt-8'>
                            <ButtonPrimary variant='primary'>Explore Products</ButtonPrimary>
                            <ButtonPrimary variant='outline'>
                                <img src={BtnIcon} alt='play icon' />
                                <span className='text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text'>Watch Demo</span>
                            </ButtonPrimary>
                        </div>
                    </div>
                    <div className='w-auto'>
                        <img src={Bannar} alt='hero banner' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeSection;