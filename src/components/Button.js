
const Button = ({onClick, children}) => {

    return(
        <div>
            <button className="bg-green-600 text-white py-2 px-6 my-10 rounded hover:bg-green-700" onClick={onClick}>
                {children}
            </button>
        </div>
    )

}

export default Button;