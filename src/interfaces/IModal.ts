export interface IModal {
    isOpen: boolean;
    children: any;
    onClose: () => void;
}