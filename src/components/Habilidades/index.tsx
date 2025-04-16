"use client"
import { dataSkill } from "@/data/dataSkill"
import SkillCard from "./skillCard"
import React, { useState } from "react"

export default function Habilidades() {

    const [filtro, setFiltro] = useState("front");

    const habilidadesFiltradas = dataSkill.filter(skill => skill.categoria === filtro);

    return (
        <section
            id="habilidade"
            className="container mx-auto flex w-full flex-col items-center justify-center py-20 "
        >
            <h2
                className="text-clip  bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text pb-4 text-5xl font-semibold text-transparent"
            >
                Habilidades
            </h2>

            <div className="flex gap-4 pb-6">
                <button
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${filtro === "front" ? "bg-purple-700 text-white scale-110 border-2 border-white" : "bg-purple-600 text-white"}`}
                    onClick={() => setFiltro("front")}
                >
                    Front-end
                </button>
                <button
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${filtro === "back" ? "bg-cyan-600 text-white scale-110 border-2 border-white" : "bg-cyan-500 text-white"}`}
                    onClick={() => setFiltro("back")}
                >
                    Back-end
                </button>
                <button
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${filtro === "outro" ? "bg-gray-700 text-white scale-110 border-2 border-white" : "bg-gray-500 text-white"}`}
                    onClick={() => setFiltro("outro")}
                >
                    Outros
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 px-4">
                {habilidadesFiltradas.map((data, index) => (
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