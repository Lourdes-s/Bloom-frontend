import React from 'react'
import type { BlockType } from '../../core/types/blockTypes'

interface BlockSidebarProps {
    onAddBlock: (type: BlockType) => void
}

const sidebarItems: { type: BlockType; label: string; emoji: string }[] = [
    { type: 'note', label: 'Nota', emoji: '📝' },
    { type: 'checklist', label: 'Checklist', emoji: '✅' },
    { type: 'tracker', label: 'Tracker', emoji: '💧' },
    { type: 'image', label: 'Imagen', emoji: '🖼️' },
    { type: 'mood', label: 'Mood', emoji: '🌸' },
]

function BlockSidebar({ onAddBlock }: BlockSidebarProps) {
    return (
        <div className="flex flex-col gap-3 w-48 p-4 bg-white rounded-2xl shadow-md border border-pink-100">
            <p className="text-xs font-semibold text-pink-400 uppercase tracking-widest">
                Bloques
            </p>
            {sidebarItems.map((item) => (
                <button
                    key={item.type}
                    onClick={() => onAddBlock(item.type)}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-900 text-sm transition-colors cursor-pointer"
                >
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                </button>
            ))}
        </div>
    )
}

export default BlockSidebar