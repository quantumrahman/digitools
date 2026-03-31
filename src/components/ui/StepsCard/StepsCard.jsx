import user from '../../../assets/user.png';

const StepsCard = () => {
    return (
        <>
            <div className='w-full min-h-95 bg-white border border-[#F1F1F1] rounded-2xl p-6'>
                <div className='w-full flex items-center justify-end'>
                    <div className='w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center'>
                        <span className='manrope text-sm font-bold text-white'>01</span>
                    </div>
                </div>
                <div className='w-full mt-7 flex items-center justify-center flex-col gap-4'>
                    <div className='w-25 h-25 bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 rounded-full flex items-center justify-center'>
                        <img src={user} alt='user icon' />
                    </div>
                    <h3 className='manrope text-2xl font-bold text-[#101727]'>Create Account</h3>
                    <p className='manrope text-base font-normal text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>
        </>
    );
};

export default StepsCard;