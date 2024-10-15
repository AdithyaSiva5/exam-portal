"use client"

import { useState } from 'react'
import Link from 'next/link'
import { BarChart, Search, Mail, BarChart2, Settings, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    const NavItems = () => (
        <>
            <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md">
                <BarChart className="w-5 h-5 mr-3" />
                <span>Dashboard</span>
            </Link>
            <Link href="/find" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                <Search className="w-5 h-5 mr-3" />
                <span>Find</span>
            </Link>
            <Link href="/inbox" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                <Mail className="w-5 h-5 mr-3" />
                <span>Inbox</span>
            </Link>
            <Link href="/analytics" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                <BarChart2 className="w-5 h-5 mr-3" />
                <span>Analytics</span>
            </Link>
            <Link href="/settings" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                <Settings className="w-5 h-5 mr-3" />
                <span>Settings</span>
            </Link>
        </>
    )

    return (
        <>
            {/* Header (visible on all screens) */}
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                    <BarChart className="w-6 h-6 text-orange-500 mr-2" />
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">ELT Global</h1>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </div>

            {/* Sidebar for larger screens */}
            <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
                <nav className="flex-1 p-4">
                    <div className="mb-4">
                        <h2 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">GENERAL</h2>
                    </div>
                    <div className="space-y-2">
                        <NavItems />
                    </div>
                </nav>
            </aside>

            {/* Mobile Sidebar */}
            <div className={`md:hidden fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50" onClick={() => setIsOpen(false)}></div>
                <div className={`w-64 h-full bg-white dark:bg-gray-800 p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <nav className="flex-1">
                        <div className="mb-4">
                            <h2 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">GENERAL</h2>
                        </div>
                        <div className="space-y-2">
                            <NavItems />
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}