// NavItems.tsx
import Link from 'next/link'
import { BarChart, Search, Mail, BarChart2, Settings } from 'lucide-react'

export const NavItems = () => (
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