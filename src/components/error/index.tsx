import { IError } from "../../interfaces/IError";

const Error = ({ message, show = false }: IError) => {
    return <>
        {show && (
            <div className="w-full max-w-md p-2 bg-white border border-red-500 rounded-lg shadow-md">
                <div className="flex items-center text-red-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z" />
                    </svg>
                    <span className="text-lg font-semibold">Error</span>
                </div>
                <p className="text-gray-700 mb-4">{message}</p>
                <button onClick={() => console.log("retry")} className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                    Retry
                </button>
            </div>
        )}
    </>
}

export default Error;