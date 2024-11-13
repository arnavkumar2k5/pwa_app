export const Button = ({
    text="Start Game",
    className=""
}) => {
    return (
    <div>
        <button className={`h-[5rem] w-[24.375rem] rounded-[6.25rem] bg-black text-white ${className}`}>
            {text}
        </button>
    </div>
    )
}