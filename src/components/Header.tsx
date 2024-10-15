"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Bell, HelpCircle, User, Moon, Sun, Headphones } from 'lucide-react'

export default function Header() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null
    }

    return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Heading</h1>
                        <nav className="mt-2 space-x-4">
                            <Link href="/exam" className="text-orange-500 hover:text-orange-700 font-medium border-b-2 border-orange-500 pb-1">Exam</Link>
                            <Link href="/lorem1" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Lorem</Link>
                            <Link href="/lorem2" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Lorem</Link>
                            <Link href="/lorem3" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Lorem</Link>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white" aria-label="Notifications">
                            <Bell className="w-6 h-6" />
                        </button>
                        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Help">
                            <Headphones className="w-6 h-6" />
                        </button>
                        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white" aria-label="User profile">
                            <User className="w-6 h-6" />
                        </button>
                        <button
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            aria-label="Toggle dark mode"
                        >
                            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}