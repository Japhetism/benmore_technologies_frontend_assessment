import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchLists } from "../../redux/list";
import { IList } from "../../interfaces/IList"
import Button from "../button";
import { listIconsFixtures } from "../../fixtures/icons";

const ListList = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { lists, status, error } = useSelector((state: RootState) => state.lists);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchLists());
        }
    }, [status, dispatch]);

    const ListIcon = (index: number): React.ReactElement => {
        const Icon = listIconsFixtures()[index];
        const DefaultIcon = listIconsFixtures()[listIconsFixtures().length - 1];
        return Icon ? <Icon /> : <DefaultIcon />;
    }

    return <>
        <ul className="space-y-2 text-md text-black">
            <li className="relative mt-2 mb-2 flex items-center block py-2 px-2 rounded hover:bg-slate-300">
                <span className="mr-2 w-8 h-8 flex items-center justify-center text-gray-500">{ListIcon(0)}</span>
                <Link to="" className="">Home</Link>
                <span className="absolute right-2 w-8 h-8 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full text-sm">{100}</span>
            </li>
            {lists.map((list: IList, index: number) => (
                <li className="relative mt-2 mb-2 flex items-center block py-2 px-2 rounded hover:bg-slate-300" key={`${index}-${list.id}`}>
                    <span className="mr-2 w-8 h-8 flex items-center justify-center text-gray-500">{ListIcon(index+1)}</span>
                    <Link to="" className="">{list.name}</Link>
                    <span className="absolute right-2 w-8 h-8 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full text-sm">{index}</span>
                </li>
            ))}
        </ul>
        <div className="mt-6">
            <Button name="Create new list" signText="L" showCommandIcon showPlusIcon onClick={() => console.log("create new list")}/>
        </div>
    </>
}

export default ListList;