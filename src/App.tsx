import SideMenu from "./components/sideMenu";
import Tasks from "./features/Tasks";

const App = () => {
  return <>
    <div className="flex h-screen">
      <SideMenu />
      <div className="flex-1 p-0">
        <Tasks />
      </div>
    </div>
  </>
};

export default App;