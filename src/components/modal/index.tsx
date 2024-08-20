import { IModal } from "../../interfaces/IModal";
import { AiOutlineMacCommand, AiOutlinePlus } from "react-icons/ai";
import SelectDropdown from "../dropdown";

const Modal = ({ isOpen = false, children, onClose }: IModal) => {
  
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed bottom-28 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 min-w-[40rem]">
        {children}
      </div>
    </>
  );
}

const ModalChildren = () => {
  return <>
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <input type="text" placeholder="Create new task" className="w-full p-2 border border-gray-300 rounded mb-5" />
      <div className="w-full mb-5">
        <SelectDropdown options={[{ value: '1', label: 'Option 1' }]} />
      </div>
      <div className="w-full mb-5">
        <SelectDropdown options={[{ value: '1', label: 'Option 1' }]} />
      </div>
      <textarea placeholder="Add notes" className="w-full p-2 border border-gray-300 rounded resize-none" style={{ height: '20rem' }} />
    </div>
  </>
}

const FloatingActionButton = ({ show = false }: { show: boolean}) => {
  
  if(!show) return null;

  return (
    <>
      <Modal isOpen={show} onClose={() => {}} children={<ModalChildren />}/>
      <button className="flex items-center block fixed bottom-10 left-1/2 ransform -translate-x-1/2 bg-black text-white p-4 rounded-full shadow-lg hover:bg-black transition min-w-[40rem]" onClick={() => {}}>
        <span className="mr-1 flex items-center text-md"><AiOutlinePlus /></span>
        Create new task
        <div className="absolute right-2 flex space-x-1 p-1">
          <span className="w-10 h-10 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full text-sm">
            <AiOutlineMacCommand />
          </span>
          <span className="w-10 h-10 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full text-sm font-bold">
            N
          </span>
        </div>
      </button>
    </>
  );
};

export default FloatingActionButton;
