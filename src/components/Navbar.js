"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "react-modal";

import Feed from "@/components/Feed"



export default function Navbar() {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [resource, setResource] = useState();
=======
    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <div className="h-screen w-64 bg-white text-black flex flex-col p-6 border border-gray-200">
            <nav className="flex flex-col space-y-4">

                <img
                    src="https://i.postimg.cc/B6T6dPsm/1.png"
                    alt="Logo"
                    className="w-50 h-auto mx-auto mb-6"
                />

                <a href="/" className="flex hover:bg-gray-100 p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                Home</a>

                <button 
                    onClick={() => setIsOpen(true)}
                    className="flex hover:bg-gray-100 p-2 rounded"> 

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                Create</button>

                <a href="/profile" className="flex hover:bg-gray-200 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                Profile</a>
            </nav>

                <Modal 
                    ariaHideApp={false}
                    isOpen={isOpen} 
                    onRequestClose={() => setIsOpen(false)}
                    className="bg-white rounded-xl shadow-lg w-full max-w-3xl h-[80%] mx-auto overflow-hidden"
                    overlayClassName="fixed inset-0 bg-black/40 flex items-center justify-center">

                    <div className="border-b px-4 py-3 flex justify-between items-center">
                        <h1 className=" text-black font-semibold">Create new post</h1>
                        <button onClick={() => setIsOpen(false)} className="text-black hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center">
                        <div className="flex justify-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>


                        <p className="text-gray-500">Upload photos and videos here</p>

                        <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg flex items-center justify-center h-8">   
                            <Feed />
                        </div>

                        <p className="text-gray-500">Drag photos and videos here</p>


                        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Select from computer</button>
                        


                    </div>

                </Modal>
            

        </div>
    )
}