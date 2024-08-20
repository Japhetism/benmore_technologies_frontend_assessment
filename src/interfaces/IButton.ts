export interface IButton {
    name: string
    signText?: string
    showPlusIcon?: boolean
    showCommandIcon?: boolean
    onClick: () => void
}