import React, { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import type { DayCanvas as DayCanvasType } from '../../core/models/dayCanvasModel'
import type { Block, BlockPosition } from '../../core/types/blockTypes'
import NoteBlock from './blocks/NoteBlock'

interface DayCanvasProps {
    canvas: DayCanvasType
    onChange: (canvas: DayCanvasType) => void
}

function DayCanvas({ canvas, onChange }: DayCanvasProps) {
    function handleDragEnd(event: DragEndEvent) {
        const { active, delta } = event
        const updatedBlocks = canvas.blocks.map((block) => {
            if (block.id !== active.id) return block
            const newPosition: BlockPosition = {
                x: block.position.x + delta.x,
                y: block.position.y + delta.y,
            }
            return { ...block, position: newPosition }
        })
        onChange({ ...canvas, blocks: updatedBlocks })
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="relative w-full h-full bg-pink-50 rounded-2xl overflow-hidden">
                {canvas.blocks.map((block) => {
                    if (block.type === 'note') {
                        return <NoteBlock key={block.id} block={block} />
                    }
                    return null
                })}
            </div>
        </DndContext>
    )
}

export default DayCanvas