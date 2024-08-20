import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineFileAdd, AiOutlineFieldTime, AiOutlineMore } from "react-icons/ai";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchTasks } from "../../redux/task";
import { getFormattedTodayDate } from "../../utils/formatter";
import { getGreetingBasedOnTime } from "../../utils/helper";
import { ITask } from "../../interfaces/ITask";
import Error from "../../components/error";

const Tasks = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { tasks, status, error } = useSelector((state: RootState) => state.tasks);
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks());
        }
    }, [status, dispatch]);

    return <>
        <div className="bg-gray-100 h-screen w-auto p-20">
            <div>
                <p className="text-black font-bold text-2xl">{`${getGreetingBasedOnTime()}, Babatunde! 👋`}</p>
                <p className="text-gray-500 text-lg mt-1">{getFormattedTodayDate()}</p>
            </div>
            <div className="mt-5">
                <Error show={status === "error"} message={error} />
                {tasks.map((task: ITask, index: number) => (
                    <div className="relative flex items-center justify-between w-full bg-white p-4 rounded-xl mb-2" key={index}>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4 accent-gray-500 transform scale-150 mr-2" />
                            <p className="font-bold text-md text-black">{task.title}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="flex items-center bg-gray-200 p-1 rounded text-sm">
                                <AiOutlineFieldTime />
                                <span>08.00 -  09.00</span>
                            </p>
                            <span className="bg-gray-200 p-1 py-1 rounded text-lg">  
                                <AiOutlineMore />
                            </span>
                        </div>
                    </div>
                ))}
                {(status === "loading") && (
                    Array.from({ length: 5 }).map((_, index) => (
                        <div className="relative flex items-center justify-between w-full bg-white p-4 rounded-xl mb-2 animate-pulse" key={index}>
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                                <div className="w-32 h-4 bg-gray-300 rounded"></div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center bg-gray-300 p-1 rounded text-sm w-24 h-4"></div>
                                <div className="bg-gray-300 p-1 py-1 rounded text-lg w-8 h-8"></div>
                            </div>
                        </div>
                    ))
                )}           
            </div>
            <button className="fixed bottom-6 right-6 bg-white text-gray-500 rounded-full p-4 shadow-lg hover:bg-gray-700" aria-label="Add Task">
                <AiOutlineFileAdd />
            </button>
        </div>
    </>
}

export default Tasks;