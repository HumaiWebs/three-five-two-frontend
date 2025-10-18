'use client';
import {useState} from "react";
import {PiUserBold} from "react-icons/pi";
import {AnimatePresence, motion} from 'framer-motion';
import {useAuth} from "@/store/AuthProvider";
import React from 'react';

type MenuItem = {
    key: string;
    label?: string;
    href?: string;
    onClick?: () => void | Promise<void>;
    component?: React.ReactNode;
}

const guestDropdownOptions: MenuItem[] = [
    { key: 'login', label: 'Login', href: '/auth/login' },
    { key: 'register', label: 'Register', href: '/auth/signup' },
]

const Dropdown = ({ onClose }: { onClose: () => void }) => {
    const {user, logout} = useAuth()

    // Build items dynamically so we can attach functions (like logout) which need access to hooks
    const items: MenuItem[] = user
        ? user.role === 'buyer'
            ? [
                { key: 'profile', label: 'Profile', href: '/profile' },
                { key: 'settings', label: 'Settings', href: '/settings' },
                { key: 'logout', label: 'Logout', onClick: async () => { await logout(); onClose(); } },
            ]
            : user.role === 'admin'
                ? [
                    // add admin items here; example: Dashboard + Logout
                    { key: 'admin-dashboard', label: 'Dashboard', href: '/admin' },
                    { key: 'admin-logout', label: 'Logout', onClick: async () => { await logout(); onClose(); } },
                ]
                : guestDropdownOptions
        : guestDropdownOptions;

    return <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -8}}
        transition={{duration: 0.15}}
        className="absolute right-0 mt-6 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
        {
            items.map((option) => {
                if (option.component) {
                    return <div key={option.key} className="px-4 py-2">{option.component}</div>;
                }

                if (option.href) {
                    return (
                        <a
                            key={option.key}
                            href={option.href}
                            onClick={() => onClose()}
                            className="block px-4 py-2 text-gray-800 hover:bg-gold hover:text-white transition-colors"
                        >
                            {option.label}
                        </a>
                    );
                }

                if (option.onClick) {
                    return (
                        <button
                            key={option.key}
                            type="button"
                            onClick={option.onClick}
                            className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gold hover:text-white transition-colors"
                        >
                            {option.label}
                        </button>
                    );
                }

                return null;
            })
        }
    </motion.div>;
}

const AvatarFromName = ({name}: {name: string}) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    return <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">
        {initials}
    </div>;
}

const MenuTrigger = ({onClick}: {onClick: ()=>void}) => {
    const {user} = useAuth();
    return <div onClick={onClick} className="cursor-pointer">
        {user ? <AvatarFromName name={user.name} /> :
         <PiUserBold size={24} className="text-gold hover:scale-105" />
        }
    </div>;
}

const Account = ()=>{
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleClose = () => setDropdownOpen(false);

    return <div className={'relative'}>
        <MenuTrigger onClick={handleToggleDropdown} />
        <AnimatePresence>
            {dropdownOpen && <Dropdown onClose={handleClose} />}
        </AnimatePresence>
    </div>;
}

export default Account;