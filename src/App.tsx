import React, { useState } from 'react'
import DayCanvas from './features/day-canvas/DayCanvas'
import type { DayCanvas as DayCanvasType } from './core/models/dayCanvasModel'

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
        {
            id: '2',
            type: 'note',
            content: 'Arrastrá este bloque',
            position: { x: 300, y: 150 },
            size: { width: 200, height: 100 },
        },
    ],
}

function App() {
    const [canvas, setCanvas] = useState<DayCanvasType>(initialCanvas)

    return (
        <div className="w-screen h-screen bg-pink-100 p-8">
            <DayCanvas canvas={canvas} onChange={setCanvas} />
        </div>
    )
}

export default App