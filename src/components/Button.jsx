/* eslint-disable react/prop-types */



const Button = ({ label, iconURL, backgroundColor,
    textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center gap-2
            px-4 py-4 border font-montserrat text-sm leading-none rounded-full
            ${backgroundColor ? `${backgroundColor} 
            ${textColor} ${borderColor}` : "bg-coral-red border-coral-red text-white"}
            ${fullWidth && 'w-full'}`}>
            {label}

            {iconURL && <img
                src={iconURL}
                className="ml-2 rounded-full w-5 h-5"
            />
            }
        </button>
    )
}

export default Button