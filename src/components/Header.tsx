import React from 'react';
import Link from 'next/link';
import { Bell, Headphones, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { FaHeadset } from 'react-icons/fa';
const Header = ({
    title = "Heading",
    navItems = [
        { name: "Exam", href: "/exam", active: true },
        { name: "Lorem", href: "/lorem1" },
        { name: "Lorem", href: "/lorem2" },
        { name: "Lorem", href: "/lorem3" }
    ],
    profileImageSrc = "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-03.jpg"
}) => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 ">
            <div className="container mx-auto px-4 py-2">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex flex-col w-full sm:w-auto">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>

                    </div>

                    <div className="flex items-center space-x-5 mt-4 sm:mt-0">
                        <button className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white" aria-label="Notifications">
                            <Bell fill="#525252" className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white" aria-label="Help">
                            <FaHeadset className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white" aria-label="User profile">
                            <img src={profileImageSrc} alt="Profile" className="w-6 h-6 rounded-full" />
                        </button>
                        <button
                            className="text-black dark:text-white hover:text-gray-800 dark:hover:text-white"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            aria-label="Toggle dark mode"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon fill="#525252" className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <nav className="space-x-4 text-sm">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`${item.active
                                    ? "text-orange-500 border-b-2 border-orange-500"
                                    : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                                    } pb-1`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;