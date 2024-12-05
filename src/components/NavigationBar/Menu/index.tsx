"use client"
import { dataMenu } from "@/data/dataMenu"
import React, { useState } from "react"
import { motion } from "framer-motion"

export default function Menu() {

    const [selectedTab, setSelectedTab] = useState(dataMenu[0]);

    return (
        <div className="hidden sm:flex justify-between gap-5 rounded-full border border-[#7042f861] bg-[#030014ad] px-5 py-2">
            {dataMenu.map((menu, index) => (
                <React.Fragment key={index}>
                    <a
                        href={menu.href}
                        className="relative flex h-auto w-auto cursor-pointer 
                        flex-row items-center"
                        onClick={() => {
                            setSelectedTab(menu);
                        }}>
                        <p className="text-sm md:text-base cursor-pointer font-semibold tracking-wider text-white transition-all duration-100 hover:scale-105 hover:text-purple-300">
                            {menu.name}
                        </p>
                        {menu === selectedTab ? (
                            <motion.div className="underline" layoutId="underline" />
                        ) : null}
                    </a>
                </React.Fragment>
            ))}
        </div>
    )
}