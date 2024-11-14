"use client";
import { dataMenu } from "@/data/dataMenu"
import React, { useState } from "react"
import { motion } from "framer-motion"

export default function MenuMobile() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(prev => !prev);

    return (
        <div className="flex sm:hidden justify-between gap-5 rounded-full border border-[#7042f861] bg-[#030014ad] px-5 py-2 relative">
            <p
                onClick={handleOpen}
                className="text-sm cursor-pointer font-semibold tracking-wider text-white transition-all duration-100 hover:scale-105 hover:text-purple-300"
            >
                MENU
            </p>

            {open && (
                <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full mt-2 left-0 right-0 bg-[#1a1a2e] rounded-lg shadow-lg text-white text-sm z-10 w-28"
                >
                    {dataMenu.map((menu) => (
                        <li key={menu.name}>
                            <a
                                href={menu.href}
                                className="py-2 px-4 hover:bg-purple-600 rounded transition-colors duration-200 cursor-pointer block"
                            >
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
}
