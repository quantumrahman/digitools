const StatsSection = () => {
    return (
        <>
            <div className='w-full py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                <div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='w-full flex items-center justify-center flex-wrap'>
                        <div className='w-92.5 text-center space-y-3'>
                            <h2 className='manrope text-[60px] font-extrabold text-white'>50K+</h2>
                            <p className='manrope text-2xl font-medium text-[#FFFFFF]/70'>Active Users</p>
                        </div>
                        <div className='w-0.5 h-27 border border-white/50'></div>
                        <div className='w-92.5 text-center space-y-3'>
                            <h2 className='manrope text-[60px] font-extrabold text-white'>200+</h2>
                            <p className='manrope text-2xl font-medium text-[#FFFFFF]/70'>Premium Tools</p>
                        </div>
                        <div className='w-0.5 h-27 border border-white/50'></div>
                        <div className='w-92.5 text-center space-y-3'>
                            <h2 className='manrope text-[60px] font-extrabold text-white'>4.9</h2>
                            <p className='manrope text-2xl font-medium text-[#FFFFFF]/70'>Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsSection;