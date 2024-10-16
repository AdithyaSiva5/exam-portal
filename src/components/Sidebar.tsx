'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BarChart, Search, Mail, BarChart2, Settings, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavItems } from './NavItems'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)



    return (
        <>
            {/* Header (visible on all screens) */}
            <header className="bg-white dark:bg-gray-800  border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                        <BarChart className="w-6 h-6 text-orange-500 mr-2" />
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">ELT Global</h1>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 p-0">
                            <div className="flex flex-col h-full bg-white dark:bg-gray-800">
                                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Menu</h2>
                                </div>
                                <nav className="flex-1 p-4">
                                    <div className="mb-4">
                                        <h2 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">GENERAL</h2>
                                    </div>
                                    <div className="space-y-2">
                                        <NavItems />
                                    </div>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>

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
        </>
    )
}