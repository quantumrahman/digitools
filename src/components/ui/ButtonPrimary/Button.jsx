const Button = ({ children, variant = 'primary'}) => {
    const baseStyle = 'manrope text-base font-bold rounded-full px-4 py-3 cursor-pointer flex items-center justify-center gap-1.25';

    const style = {
        primary: 'bg-linear-to-r bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white',
        outline: 'border border-[#4F39F6] text-[#4F39F6]'
    };

    return (
        <>
            <button className={`${baseStyle} ${style[variant]}`}>{children}</button>
        </>
    );
};

export default Button;