import { Link } from "react-router-dom"

export const Button = ({
    text="Start Game",
    className="",
    LinkPath="/"
}) => {
    return (
    <div>
        <Link to={LinkPath}>
        <button className={`h-[5rem] w-[24.375rem] rounded-[6.25rem] bg-black text-white ${className}`}>
            {text}
        </button>
        </Link>
    </div>
    )
}