"use client";
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

interface ISkillCard {
    src: string;
    name: string;
    width: number;
    height: number;
    index: number;
}

export default function SkillCard({ ...props }: ISkillCard) {
    const animationDelay = 0.1;

    return (
        <motion.div
            className="flex  flex-col items-center gap-2 p-4 bg-[#1a1a2e] rounded-lg shadow-lg transform transition duration-200 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: props.index * animationDelay, duration: 0.6 }}
        >
            <Image
                src={props.src}
                width={props.width}
                height={props.height}
                alt={`Logo ${props.name}`}
                className={`h-[120px] rounded-lg`}
            />
            <p className="text-lg font-medium text-white">{props.name}</p>
        </motion.div>
    );
}
