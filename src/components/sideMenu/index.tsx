import ListList from "../listList";
import GroupList from "../groupList";

const SideMenu = () => {

    return <nav className="w-72 h-screen bg-white text-white p-4 py-6">
        <div className="mb-2">
            <h3 className="text-lg text-black font-semibold">Private</h3>
            <ListList />
        </div>
        <div className="mb-2 mt-5">
            <h3 className="text-lg text-black font-semibold">Group</h3>
            <GroupList />
        </div>
    </nav>
}

export default SideMenu;