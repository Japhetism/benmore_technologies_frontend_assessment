import { AiOutlinePlus, AiOutlineMacCommand } from "react-icons/ai";
import { IButton } from "../../interfaces/IButton";


const Button = ({
    name,
    signText = '',
    showPlusIcon = false,
    showCommandIcon = false,
    onClick
}: IButton) => {
    return <>
        <button onClick={() => onClick()} className="relative flex items-center block py-2 px-1 pl-2 rounded-full text-md text-left text-black w-full bg-slate-300 hover:bg-slate-300 font-bold border-0 m-0">
            {showPlusIcon && (
                <span className="flex items-center text-xl"><AiOutlinePlus /></span>
            )}
            {name}
            <div className="absolute bottom-0 right-0 flex space-x-1 p-1">
                {showCommandIcon && (
                    <span className="w-8 h-8 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full text-sm">
                        <AiOutlineMacCommand />
                    </span>
                )}
                {signText && (
                    <span className="w-8 h-8 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full text-sm">
                        {signText}
                    </span>
                )}
            </div>
            
        </button>
    </>
}

export default Button;