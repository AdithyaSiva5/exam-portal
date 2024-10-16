'use client'

import { useState } from 'react'
import { BarChart, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { NavItems } from './NavItems'

export default function Sidebar() {
    const [isMinimized, setIsMinimized] = useState(false)

    return (
        <aside className={`flex flex-col h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${isMinimized ? 'w-16' : 'w-60'}`}>
            <div className="flex items-center justify-between p-4  border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 overflow-hidden">
                    <BarChart className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    {!isMinimized && <h1 className="text-xl font-semibold text-gray-800 dark:text-white whitespace-nowrap">ELT Global</h1>}
                </div>
                {!isMinimized && (
                    <Button variant="ghost" size="icon" onClick={() => setIsMinimized(true)} className="ml-auto">
                        <Menu className="h-4 w-4" />
                        <span className="sr-only">Minimize sidebar</span>
                    </Button>
                )}
            </div>
            {isMinimized && (
                <Button variant="ghost" size="icon" onClick={() => setIsMinimized(false)} className="mt-2 mx-auto">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Expand sidebar</span>
                </Button>
            )}
            <nav className="flex-1 py-4 overflow-y-auto">
                <div>
                    {!isMinimized && <h2 className="px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">GENERAL</h2>}
                    <div className={`space-y-1 ${isMinimized ? 'items-center' : ''}`}>
                        <NavItems isMinimized={isMinimized} />
                    </div>
                </div>
            </nav>
        </aside>
    )
}