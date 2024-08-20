import { IButton } from "../../interfaces/IButton";

const Button = ({ name, onClick }: IButton) => {
    return <>
        <button onClick={() => onClick()} className="block py-2 px-2 pl-5 rounded-full text-xl text-left text-black w-72 bg-slate-300 hover:bg-slate-300 font-bold border-0 m-0">
            {name}
        </button>
    </>
}

export default Button;