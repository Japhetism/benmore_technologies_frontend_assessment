import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store";
import { fetchGroups } from "../../redux/group";
import Button from "../button";
import { IGroup } from "../../interfaces/IGroup";
import { formatGroupUserLabel } from "../../utils/formatter";

const GroupList = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { groups, status, error } = useSelector((state: RootState) => state.groups);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchGroups());
        }
    }, [status, dispatch]);
    
    return <>
        <div className="flex flex-row mt-4 mb-3 space-x-2 overflow-x-auto scrollbar-hidden">
            {groups.map((group: IGroup, index: number) => (
                <div>
                    <div className="bg-gray-300 w-32 h-32 rounded" />
                    <p className="text-black text-md font-bold">{group.name}</p>
                    <p className="text-gray-500 text-sm">{formatGroupUserLabel(group)}</p>
                </div>
            ))}
        </div>
        <Button name="Create new group" signText="G" showCommandIcon showPlusIcon onClick={() => console.log("create new group")}/>
    </>
}

export default GroupList;