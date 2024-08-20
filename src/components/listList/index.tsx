import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchLists } from "../../redux/list";
import { IList } from "../../interfaces/IList"
import Button from "../button";

const ListList = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { lists, status, error } = useSelector((state: RootState) => state.lists);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchLists());
        }
    }, [status, dispatch]);

    return <>
        <ul className="space-y-2 text-2xl text-black">
            <li className="mt-4 mb-4">
                <Link to="" className="block py-2 px-2 rounded hover:bg-slate-300">Home</Link>
            </li>
            {lists.map((list: IList, index: number) => (
                <li className="relative mt-4 mb-4 flex items-center block py-2 px-2 rounded hover:bg-slate-300" key={`${index}-${list.id}`}>
                    <Link to="" className="">{list.name}</Link>
                    <span className="absolute right-2 w-8 h-8 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full text-sm">{index}</span>
                </li>
            ))}
        </ul>
        <div className="mt-6">
            <Button name="Create new list" onClick={() => console.log("create new list")}/>
        </div>
    </>
}

export default ListList;