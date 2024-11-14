import { dataSkill } from "@/data/dataSkill"
import SkillCard from "./skillCard"
import React from "react"

export default function Habilidades() {
    return (
        <section
            id="habilidade"
            className="container mx-auto flex w-full flex-col items-center justify-center py-20 "
        >
            <h2
                className="text-clip  bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text pb-10 text-5xl font-semibold text-transparent"
            >
                Habilidades
            </h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                {dataSkill.map((data, index) => (
                    <React.Fragment key={data.name}>
                        <SkillCard
                            src={data.img}
                            height={150}
                            width={150}
                            index={index}
                            key={data.name}
                            name={data.name}
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>

    )
}