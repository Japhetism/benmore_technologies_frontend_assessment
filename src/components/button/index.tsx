import { AiOutlinePlus, AiOutlineMacCommand } from "react-icons/ai";
import { IButton } from "../../interfaces/IButton";


const Button = ({
    name,
    signText = '',
    showPlusIcon = false,
    showCommandIcon = false,
    isLoading = false,
    onClick
}: IButton) => {
    return <>
        {isLoading ? (
            <button className="relative flex items-center block py-2 px-1 pl-2 rounded-full text-md text-left text-black w-full bg-gray-300 hover:bg-gray-300 font-bold border-0 m-0 animate-pulse">
                <span className="mr-1 flex items-center text-md bg-gray-300 w-6 h-6 rounded-full"></span>
                <div className="bg-gray-300 h-4 w-1/2 rounded ml-2"></div>
                <div className="absolute bottom-0 right-0 flex space-x-1 p-1">
                <span className="w-8 h-8 bg-gray-300 text-gray-500 flex items-center justify-center rounded-full text-sm"></span>
                <span className="w-8 h-8 bg-gray-300 text-gray-500 flex items-center justify-center rounded-full text-sm"></span>
                </div>
            </button>
        ):(
            <button onClick={() => onClick()} className="relative flex items-center block py-2 px-1 pl-2 rounded-full text-md text-left text-black w-full bg-slate-300 hover:bg-slate-300 font-bold border-0 m-0">
                {showPlusIcon && (
                    <span className="mr-1 flex items-center text-md"><AiOutlinePlus /></span>
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
        )}
    </>
}

export default Button;