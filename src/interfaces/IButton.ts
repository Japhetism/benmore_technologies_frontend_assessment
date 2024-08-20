export interface IButton {
    name: string
    signText?: string
    showPlusIcon?: boolean
    showCommandIcon?: boolean
    isLoading?: boolean
    onClick: () => void
}