"use client"
import { dataMenu } from "@/data/dataMenu"
import React from "react"

export default function Menu() {
    return (
        <div className="hidden sm:flex justify-between gap-5 rounded-full border border-[#7042f861] bg-[#030014ad] px-5 py-2">
            {dataMenu.map((menu, index) => (
                <React.Fragment key={index}>
                    <a
                        href={menu.href}
                        className="relative flex h-auto w-auto cursor-pointer flex-row items-center"
                    >
                        <p className="text-sm md:text-base cursor-pointer font-semibold tracking-wider text-white transition-all duration-100 hover:scale-105 hover:text-purple-300">
                            {menu.name}
                        </p>
                    </a>
                </React.Fragment>
            ))}
        </div>
    )
}