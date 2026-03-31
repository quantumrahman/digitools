import { Check } from "lucide-react";

const ProductCard = () => {
    return (
        <>
            <div className='w-full relative p-6 space-y-4 border border-[#F2F2F2] bg-white rounded-2xl'>
                <div className='absolute top-2.5 right-2.5 px-3 py-1.5 bg-[#FEF3C6] rounded-full'>
                    <span className='manrope text-sm font-medium text-[#BB4D00]'>Best Seller</span>
                </div>
                <div className='w-15 h-15 bg-white border border-[#F2F2F2] rounded-full flex items-center justify-center'>
                    <img src="../../../../public/gemini-ai-icon.png" alt="" className="w-12.5" />
                </div>
                <h3 className='manrope text-2xl font-bold text-[#101727]'>AI Writing Pro</h3>
                <p className='manrope text-base font-normal text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                <p className='manrope text-2xl font-bold text-[#101727]'>$20<span className='text-base font-normal text-[#627382]'>/Monthly</span></p>
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
                    <div className="flex items-center gap-2">
                        <Check color='#30B868'></Check>
                        <span className='manrope text-base font-medium text-[#627382]'>Unlimited AI generations</span>
                    </div>
                </div>
                <button className='w-full py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full manrope text-base font-bold text-white'>
                    Buy Now
                </button>
            </div>
        </>
    );
};

export default ProductCard;