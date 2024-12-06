import { dataProjeto } from "@/data/dataProjeto"
import ProjetoCard from "./projetoCard"
import React from "react"

export default function Projetos() {

    return (
        <section
            id="projeto"
            className="container mx-auto flex w-full flex-col items-center justify-center py-20 "
        >
            <h2
                className="text-clip  bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text pb-10 text-5xl font-semibold text-transparent"
            >
                Projetos
            </h2>
            <div className="flex flex-wrap justify-center gap-8 px-4">
                {dataProjeto.map((data, index) => (
                    <React.Fragment key={data.name}>
                        <ProjetoCard
                            name={data.name}
                            img={data.img}
                            hrefSite={data.href_site}
                            hrefGithub={data.href_github}
                            index={index}
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}