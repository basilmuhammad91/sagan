import React, { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function MainHeader() {
    const { props } = usePage();
    const user = props.auth?.user || null;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);
    const closeUserDropdown = () => setUserDropdownOpen(false);

    const getUserInitials = (name) =>
        name
            .split(" ")
            .map((word) => word.charAt(0))
            .join("")
            .toUpperCase()
            .substring(0, 2);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setUserDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <header className="border-b border-gray-200 shadow-sm bg-background">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-text">SAGAN</span>
                        </Link>
                    </div>

                    <nav className="items-center hidden space-x-8 md:flex">
                        <Link
                            href="/"
                            className={`font-medium transition-colors duration-200 text-text hover:text-primary ${
                                props.url === "/" ? "text-primary" : ""
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`font-medium transition-colors duration-200 text-text hover:text-primary ${
                                props.url === "/about" ? "text-primary" : ""
                            }`}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/faq"
                            className={`font-medium transition-colors duration-200 text-text hover:text-primary ${
                                props.url === "/faq" ? "text-primary" : ""
                            }`}
                        >
                            FAQ
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        {!user ? (
                            <>
                                <Link
                                    href="/login"
                                    className="font-medium transition-colors duration-200 text-text hover:text-primary"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex items-center px-4 py-2 space-x-1 font-medium text-white transition-colors duration-200 rounded-md bg-primary hover:bg-primary"
                                >
                                    <span>Start</span>
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </>
                        ) : (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={toggleUserDropdown}
                                    className="flex items-center px-3 py-2 space-x-2 font-medium transition-colors duration-200 rounded-md text-text hover:text-primary hover:bg-gray-50"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 text-sm font-medium text-white rounded-full bg-primary">
                                        {getUserInitials(user.name)}
                                    </div>
                                    <span className="hidden sm:block">{user.name}</span>
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                            userDropdownOpen ? "rotate-180" : ""
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {userDropdownOpen && (
                                    <div className="absolute right-0 z-50 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                                        <div className="py-1">
                                            <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                                                <div className="font-medium">{user.name}</div>
                                                <div className="text-gray-500">{user.email}</div>
                                            </div>
                                            <Link
                                                href="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                                                onClick={closeUserDropdown}
                                            >
                                                Profile
                                            </Link>
                                            <Link
                                                href="/dashboard"
                                                className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                                                onClick={closeUserDropdown}
                                            >
                                                Dashboard
                                            </Link>
                                            <Link
                                                href="/settings"
                                                className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                                                onClick={closeUserDropdown}
                                            >
                                                Settings
                                            </Link>
                                            <hr className="border-gray-200" />
                                            <Link
                                                href="/logout"
                                                method="post"
                                                as="button"
                                                className="block w-full px-4 py-2 text-sm text-left text-red-600 transition-colors duration-200 hover:bg-red-50"
                                                onClick={closeUserDropdown}
                                            >
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="transition-colors duration-200 text-text hover:text-primary"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        mobileMenuOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 sm:px-3">
                            <Link
                                href="/"
                                className={`block px-3 py-2 font-medium text-text hover:text-primary ${
                                    props.url === "/" ? "text-primary" : ""
                                }`}
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={`block px-3 py-2 font-medium text-text hover:text-primary ${
                                    props.url === "/about" ? "text-primary" : ""
                                }`}
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/faq"
                                className={`block px-3 py-2 font-medium text-text hover:text-primary ${
                                    props.url === "/faq" ? "text-primary" : ""
                                }`}
                                onClick={closeMobileMenu}
                            >
                                FAQ
                            </Link>

                            <div className="pt-4 pb-2 border-t border-gray-200">
                                {!user ? (
                                    <>
                                        <Link
                                            href="/login"
                                            className="block px-3 py-2 font-medium text-text hover:text-primary"
                                            onClick={closeMobileMenu}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="block px-3 py-2 mt-2 font-medium text-center text-white rounded-md bg-primary hover:bg-primary"
                                            onClick={closeMobileMenu}
                                        >
                                            Start
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <div className="px-3 py-2 text-sm text-gray-700 border-b border-gray-200">
                                            <div className="font-medium">{user.name}</div>
                                            <div className="text-gray-500">{user.email}</div>
                                        </div>
                                        <Link
                                            href="/profile"
                                            className="block px-3 py-2 font-medium text-text hover:text-primary"
                                            onClick={closeMobileMenu}
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href="/dashboard"
                                            className="block px-3 py-2 font-medium text-text hover:text-primary"
                                            onClick={closeMobileMenu}
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="/settings"
                                            className="block px-3 py-2 font-medium text-text hover:text-primary"
                                            onClick={closeMobileMenu}
                                        >
                                            Settings
                                        </Link>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                            className="block w-full px-3 py-2 font-medium text-left text-red-600 hover:text-red-800"
                                            onClick={closeMobileMenu}
                                        >
                                            Logout
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
