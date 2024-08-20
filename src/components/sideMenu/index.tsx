import ListList from "../listList";
import GroupList from "../groupList";

const SideMenu = () => {

    return <nav className="w-96 h-screen bg-white text-white p-4 py-12">
        <div className="mb-4">
            <h3 className="text-3xl text-black font-semibold mb-2">Private</h3>
            <ListList />
        </div>
        <div className="mb-4 mt-20">
            <h3 className="text-3xl text-black font-semibold mb-4">Group</h3>
            <GroupList />
        </div>
    </nav>
}

export default SideMenu;