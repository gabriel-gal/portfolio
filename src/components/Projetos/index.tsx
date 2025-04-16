"use client"
import { dataProjeto } from "@/data/dataProjeto"
import ProjetoCard from "./projetoCard"
import React, { useState } from "react"

export default function Projetos() {

    const [filtro, setFiltro] = useState("front");

    const projetosFiltrados = dataProjeto.filter(skill => skill.categoria === filtro);

    return (
        <section
            id="projeto"
            className="container mx-auto flex w-full flex-col items-center justify-center py-20 "
        >
            <h2
                className="text-clip  bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text pb-10 text-5xl font-semibold text-transparent"
            >
                Projetos
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
            </div>

            <div className="flex flex-wrap justify-center gap-8 px-4">
                {projetosFiltrados.length > 0 ? (
                    projetosFiltrados.map((data, index) => (
                        <React.Fragment key={data.name}>
                            <ProjetoCard
                                name={data.name}
                                img={data.img}
                                hrefSite={data.href_site}
                                hrefGithub={data.href_github}
                                index={index}
                            />
                        </React.Fragment>
                    ))
                ) : (
                    <p className="text-white text-2xl font-medium py-10 opacity-70">
                        Projetos em andamento...
                    </p>
                )}
            </div>

        </section>
    )
}