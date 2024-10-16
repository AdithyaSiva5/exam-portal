'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BarChart, Search, Mail, BarChart2, Settings, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavItems } from './NavItems'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    

    return (
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <BarChart className="w-6 h-6 text-orange-500 mr-2" />
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">ELT Global</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavItems />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="w-full h-full " >
                                <div className="flex flex-col h-full bg-white dark:bg-gray-800">
                                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Menu</h2>
                                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                            <X className="h-6 w-6" />
                                            <span className="sr-only">Close menu</span>
                                        </Button>
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
                </div>
            </div>
        </nav>
    )
}