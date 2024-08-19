import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchLists } from "../redux/list";
import { IList } from "../interfaces/IList";

const SideMenu = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { lists, status, error } = useSelector((state: RootState) => state.lists);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchLists());
        }
    }, [status, dispatch]);

    return <nav className="w-80 h-screen bg-yellow-800 text-white p-4 py-12">
        <div className="mb-4">
            <h3 className="text-3xl text-black font-semibold mb-2">Private</h3>
            <ul className="space-y-2 text-2xl text-black">
                <li className="mt-4 mb-4">
                    <Link to="" className="block py-2 px-2 rounded hover:bg-slate-300">Home</Link>
                </li>
                {lists.map((list: IList, index: number) => (
                    <li className="mt-4 mb-4" key={`${index}-${list.id}`}>
                        <Link to="" className="block py-2 px-2 rounded hover:bg-slate-300">{list.name}</Link>
                    </li>
                ))}
                <li className="mt-4 mb-4">
                    <button onClick={() => {}} className="block py-2 px-2 pl-5 rounded-full text-left text-black w-72 bg-slate-300 hover:bg-slate-300 font-bold  border-0 m-0">
                        Create new list
                    </button>
                </li>
            </ul>
        </div>
    </nav>
}

export default SideMenu;