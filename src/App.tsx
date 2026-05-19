import React, { useState } from 'react'
import DayCanvas from './features/day-canvas/DayCanvas'
import BlockSidebar from './features/day-canvas/BlockSidebar'
import type { DayCanvas as DayCanvasType } from './core/models/dayCanvasModel'
import type { BlockType, NoteBlock } from './core/types/blockTypes'

const initialCanvas: DayCanvasType = {
    date: '2026-05-10',
    blocks: [
        {
            id: '1',
            type: 'note',
            content: '¡Hola Bloom! 🌸',
            position: { x: 50, y: 50 },
            size: { width: 200, height: 100 },
        },
    ],
}

function App() {
    const [canvas, setCanvas] = useState<DayCanvasType>(initialCanvas)

    function handleAddBlock(type: BlockType) {
        if (type !== 'note') return

        const newBlock: NoteBlock = {
            id: crypto.randomUUID(),
            type: 'note',
            content: 'Nueva nota 🌸',
            position: { x: 100, y: 100 },
            size: { width: 200, height: 100 },
        }

        setCanvas((prev) => ({
            ...prev,
            blocks: [...prev.blocks, newBlock],
        }))
    }

    return (
        <div className="w-screen h-screen bg-pink-100 p-8 flex gap-6">
            <BlockSidebar onAddBlock={handleAddBlock} />
            <div className="flex-1">
                <DayCanvas canvas={canvas} onChange={setCanvas} />
            </div>
        </div>
    )
}

export default App