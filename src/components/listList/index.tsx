import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchLists } from "../../redux/list";
import { hideModal, showModal } from "../../redux/modal";
import Button from "../button";
import Error from "../error";
import { IList } from "../../interfaces/IList"
import { listIconsFixtures } from "../../fixtures/icons";

const ListList = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { lists, status, error } = useSelector((state: RootState) => state.lists);
    const { isVisible, type } = useSelector((state: RootState) => state.modal);

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

    const handleModal = () => {
        if (isVisible) dispatch(hideModal());

        if (!isVisible) dispatch(showModal({ type: "lists" }));
    }

    const getButtonTitle = () => {
        if (isVisible && type === "lists") return "Close new list"

        return "Create new list";
    }

    return <>
        <Error show={status === "error"} message={error} />
        <ul className="space-y-2 text-md text-black">
            {(status !== "loading" && status !== "error") && (
                <li className="relative mt-2 mb-2 flex items-center block py-2 px-2 rounded hover:bg-slate-300">
                    <span className="mr-2 w-8 h-8 flex items-center justify-center text-gray-500">{ListIcon(0)}</span>
                    <Link to="" className="">Home</Link>
                    <span className="absolute right-2 w-8 h-8 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full text-sm">{100}</span>
                </li>
            )}
            {lists.map((list: IList, index: number) => (
                <li className="relative mt-2 mb-2 flex items-center block py-2 px-2 rounded hover:bg-slate-300" key={`${index}-${list.id}`}>
                    <span className="mr-2 w-8 h-8 flex items-center justify-center text-gray-500">{ListIcon(index+1)}</span>
                    <Link to="" className="">{list.name}</Link>
                    <span className="absolute right-2 w-8 h-8 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full text-sm">{index}</span>
                </li>
            ))}
            {status === "loading" && (
                Array.from({ length: 7 }).map((_, index) => (
                    <li className="relative mt-2 mb-2 flex items-center block py-2 px-2 rounded hover:bg-slate-300 animate-pulse" key={index}>
                        <span className="mr-2 w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full"></span>
                        <div className="flex-1 bg-gray-300 h-4 rounded"></div>
                        <span className="absolute right-2 w-8 h-8 bg-gray-300 text-gray-500 flex items-center justify-center rounded-full text-sm"></span>
                    </li>
                ))
            )}
        </ul>
        <div className="mt-6">
            <Button name={getButtonTitle()} signText="L" isLoading={status === "loading"} showCommandIcon showPlusIcon onClick={() => handleModal()}/>
        </div>
    </>
}

export default ListList;