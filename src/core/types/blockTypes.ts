export type BlockType =
    | "note"
    | "checklist"
    | "tracker"
    | "image"
    | "mood"

export type BlockPosition = {
    x: number
    y: number
}

export type BlockSize = {
    width: number
    height: number
}

export type BaseBlock = {
    id: string
    type: BlockType
    position: BlockPosition
    size: BlockSize
}

export type NoteBlock = BaseBlock & {
    type: "note"
    content: string
}

export type ChecklistItem = {
    id: string
    text: string
    completed: boolean
}

export type ChecklistBlock = BaseBlock & {
    type: "checklist"
    items: ChecklistItem[]
}

export type Block =
    | NoteBlock
    | ChecklistBlock