

// eslint-disable-next-line react/prop-types
const Button = ({ label, iconURL }) => {
    return (
        <button className="flex justify-center items-center gap-2
            px-4 py-4 border border-coral-red font-montserrat text-sm leading-none 
            bg-coral-red rounded-full text-white
        ">
            {label}

            <img
                src={iconURL}
                className="ml-2 rounded-full w-5 h-5"
            />
        </button>
    )
}

export default Button