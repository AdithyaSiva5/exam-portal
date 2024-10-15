import Link from 'next/link'
import { BarChart, Search, Mail, BarChart2, Settings } from 'lucide-react'

export default function Sidebar() {
    return (
        <aside className="bg-white dark:bg-gray-800 w-64 min-h-screen flex flex-col border-r border-gray-200 dark:border-gray-700">
            <div className="p-4 flex items-center border-b border-gray-200 dark:border-gray-700">
                <BarChart className="w-6 h-6 text-orange-500 mr-2" />
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">ELT Global</h1>
            </div>
            <nav className="flex-1">
                <div className="px-4 py-2">
                    <h2 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">GENERAL</h2>
                </div>
                <ul className="space-y-1 px-2">
                    <li>
                        <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md">
                            <BarChart className="w-5 h-5 mr-3" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/find" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <Search className="w-5 h-5 mr-3" />
                            Find
                        </Link>
                    </li>
                    <li>
                        <Link href="/inbox" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <Mail className="w-5 h-5 mr-3" />
                            Inbox
                        </Link>
                    </li>
                    <li>
                        <Link href="/analytics" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <BarChart2 className="w-5 h-5 mr-3" />
                            Analytics
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            <Settings className="w-5 h-5 mr-3" />
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}