import Link from 'next/link';
import { BarChart, Search, Mail, BarChart2, Settings } from 'lucide-react';

const MicrosoftGridIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
    </svg>
);

// Define the props type for NavItem
interface NavItemProps {
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    isMinimized: boolean;
}

// Define the props type for NavItems
interface NavItemsProps {
    isMinimized: boolean;
}

export const NavItems: React.FC<NavItemsProps> = ({ isMinimized }) => {
    const items = [
        // Commented out routes for future use
        { href: "/dashboard", icon: MicrosoftGridIcon, label: "Dashboard" },
        { href: "/#", icon: Search, label: "Find" },
        { href: "/#", icon: Mail, label: "Inbox" },
        { href: "/#", icon: BarChart2, label: "Analytics" },
        { href: "/#", icon: Settings, label: "Settings" }
    ];

    return (
        <>
            {items.map((item, index) => (
                <NavItem key={index} {...item} isMinimized={isMinimized} />
            ))}
        </>
    );
};

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isMinimized }) => {
    const isActive = href === "/dashboard"; // Check if the current item is active

    return (
        <Link
            href={href}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out
                ${isActive ? "text-white bg-orange-500 " : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}
                ${isMinimized ? 'justify-center' : ''}`}
        >
            <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-orange-500'} mr-2`} />
            {!isMinimized && <span>{label}</span>}
        </Link>
    );
};
