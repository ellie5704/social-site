"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="h-screen w-64 bg-white text-black flex flex-col p-6 border border-gray-200">
            <nav className="flex flex-col space-y-4">

                <img
                    src="https://i.postimg.cc/B6T6dPsm/1.png"
                    alt="Logo"
                    className="w-50 h-auto mx-auto mb-6"
                />

                <a href="/" className={`flex items-center hover:bg-gray-100 p-2 rounded ${pathname === "/" ? "font-semibold" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                Home</a>

                <a href="/addpost" className=" flex hover:bg-gray-100 p-2 rounded"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                Create</a>

                <a href="/profile" className="flex hover:bg-gray-200 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                Profile</a>
            </nav>
        </div>
    )
}