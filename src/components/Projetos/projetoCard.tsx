"use client";
import Image from "next/image"
import React from "react"

interface IProjetoCard {
    hrefSite: string;
    hrefGithub: string;
    name: string;
    index: number;
    img: string;
}

export default function ProjetoCard({ ...props }: IProjetoCard) {

    return (
        <div
            className="flex flex-col items-center gap-2 p-4 bg-[#1a1a2e] rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
        >
            <Image
                src={props.img}
                width={500}
                height={1000}
                alt={`Logo ${props.name}`}
                className={`rounded-sm`}
            />
            <div className="flex w-full px-2 justify-between">
                <p className="text-lg font-medium text-white">{props.name}</p>
                <div className="flex gap-3">
                    <a href={props.hrefGithub} target={"_blank"}>
                        <Image
                            alt="globo"
                            src="/link-github.svg"
                            height={24}
                            width={24}
                        />
                    </a>
                    <a href={props.hrefSite} target={"_blank"}>
                        <Image
                            alt="globo"
                            src="/link-site.svg"
                            height={24}
                            width={24}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
