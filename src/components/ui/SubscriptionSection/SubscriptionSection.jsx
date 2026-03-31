import { Check } from "lucide-react";

const SubscriptionSection = () => {
    return (
        <>
            <div className='w-full py-30'>
                <div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='w-full text-center space-y-4'>
                        <h2 className='manrope text-5xl font-extrabold text-[#101727]'>Simple, Transparent Pricing</h2>
                        <p className='manrope text-base font-normal text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    </div>
                    <div className='w-full mt-10 grid grid-cols-3 gap-7.5'>
                        <div className='w-full min-h-120 bg-[#F9FAFC] border border-[#F2F2F2] p-6 rounded-2xl flex jusitfy-center gap-6 flex-col relative'>
                            <div className='space-y-2'>
                                <h3 className='manrope text-2xl font-bold text-[#101727]'>Stater</h3>
                                <p className='manrope text-base font-normal text-[#627382]'>Perfect for getting started</p>
                            </div>
                            <div className='w-full'>
                                <p className='manrope text-[40px] font-bold text-[#101727]'>$0<span className='text-xl font-normal text-[#627382]'>/Month</span></p>
                            </div>
                            <div className='space-y-2'>
                                <div className="flex items-center gap-2">
                                    <Check color='#30B868'></Check>
                                    <span className='manrope text-base font-medium text-[#627382]'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#30B868'></Check>
                                    <span className='manrope text-base font-medium text-[#627382]'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#30B868'></Check>
                                    <span className='manrope text-base font-medium text-[#627382]'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#30B868'></Check>
                                    <span className='manrope text-base font-medium text-[#627382]'>Unlimited AI generations</span>
                                </div>
                            </div>
                            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex items-center justify-center'>
                                <button className='w-77 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full manrope text-base font-bold text-white cursor-pointer'>
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                        <div className='w-full min-h-120 bg-linear-to-r from-[#4F39F6] to-[#9514FA] border border-[#F2F2F2] p-6 rounded-2xl flex jusitfy-center gap-6 flex-col relative'>
                            <div className='space-y-2'>
                                <h3 className='manrope text-2xl font-bold text-white'>Pro</h3>
                                <p className='manrope text-base font-normal text-white'>Best for professionals</p>
                            </div>
                            <div className='w-full'>
                                <p className='manrope text-[40px] font-bold text-white'>$29<span className='text-xl font-normal text-white'>/Month</span></p>
                            </div>
                            <div className='space-y-2'>
                                <div className="flex items-center gap-2">
                                    <Check color='#ffffff'></Check>
                                    <span className='manrope text-base font-medium text-white'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#ffffff'></Check>
                                    <span className='manrope text-base font-medium text-white'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#ffffff'></Check>
                                    <span className='manrope text-base font-medium text-white'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#ffffff'></Check>
                                    <span className='manrope text-base font-medium text-white'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#ffffff'></Check>
                                    <span className='manrope text-base font-medium text-white'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#ffffff'></Check>
                                    <span className='manrope text-base font-medium text-white'>Unlimited AI generations</span>
                                </div>
                            </div>
                            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex items-center justify-center'>
                                <button className='w-77 py-3 bg-white rounded-full manrope text-base font-bold cursor-pointer'>
                                    <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">Start Pro Trial</span>
                                </button>
                            </div>
                        </div>
                        <div className='w-full min-h-120 bg-[#F9FAFC] border border-[#F2F2F2] p-6 rounded-2xl flex jusitfy-center gap-6 flex-col relative'>
                            <div className='space-y-2'>
                                <h3 className='manrope text-2xl font-bold text-[#101727]'>Stater</h3>
                                <p className='manrope text-base font-normal text-[#627382]'>Perfect for getting started</p>
                            </div>
                            <div className='w-full'>
                                <p className='manrope text-[40px] font-bold text-[#101727]'>$0<span className='text-xl font-normal text-[#627382]'>/Month</span></p>
                            </div>
                            <div className='space-y-2'>
                                <div className="flex items-center gap-2">
                                    <Check color='#30B868'></Check>
                                    <span className='manrope text-base font-medium text-[#627382]'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#30B868'></Check>
                                    <span className='manrope text-base font-medium text-[#627382]'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#30B868'></Check>
                                    <span className='manrope text-base font-medium text-[#627382]'>Unlimited AI generations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check color='#30B868'></Check>
                                    <span className='manrope text-base font-medium text-[#627382]'>Unlimited AI generations</span>
                                </div>
                            </div>
                            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex items-center justify-center'>
                                <button className='w-77 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full manrope text-base font-bold text-white cursor-pointer'>
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscriptionSection;