import ProductCard from "../ProductCard/ProductCard.jsx";

const PremiumSection = () => {
    return (
        <>
            <div className='max-w-300 mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='py-30'>
                    <div className='w-full text-center space-y-4'>
                        <h2 className='manrope text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h2>
                        <p className='manrope text-base font-normal text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    </div>
                    <div className='w-full flex items-center justify-center mt-4'>
                        <div className='w-62 flex items-center justify-center border border-[#F6F6F6] bg-white p-1 rounded-full'>
                            <button className='w-30 manrope text-base font-bold text-white px-4 py-3.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full cursor-pointer'>Products</button>
                            <button className='w-30 manrope text-base font-bold text-[#25065D] px-4 py-3.5 rounded-full cursor-pointer'>Cart(0)</button>
                        </div>
                    </div>
                    <div className='w-full mt-10 grid grid-cols-3 gap-7.5'>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PremiumSection;