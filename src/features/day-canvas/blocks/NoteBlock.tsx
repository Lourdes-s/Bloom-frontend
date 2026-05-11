import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import type { NoteBlock as NoteBlockType } from '../../../core/types/blockTypes'

interface NoteBlockProps {
    block: NoteBlockType
}

function NoteBlock({ block }: NoteBlockProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: block.id,
    })

    const style: React.CSSProperties = {
        position: 'absolute',
        left: block.position.x,
        top: block.position.y,
        width: block.size.width,
        height: block.size.height,
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="bg-white rounded-xl shadow-md border border-pink-200 p-3 cursor-grab active:cursor-grabbing"
        >
            <p className="text-sm text-pink-900">{block.content}</p>
        </div>
    )
}

export default NoteBlock