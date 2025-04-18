"use client"
import { slideInFromLeft, slideInFromRight } from "@/utils/motion"
import { } from "../../../public/img/imgportigolio.jpg"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Banner() {

    return (
        <section
            id="inicio"
            style={{ scrollMarginTop: "80px" }}
            className="flex min-h-screen w-full items-center justify-center mt-20 lg:mt-0">
            <motion.div
                initial="hidden"
                animate="visible"
                className="container mx-auto flex h-full w-4/5 flex-col lg:flex-row items-center 
                justify-center px-10"
            >
                <div
                    className="mx-auto flex h-full w-full flex-col justify-center 
                    gap-5 text-center lg:text-left lg:items-start"
                >
                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="font-bold text-white"
                    >
                        <span className="flex flex-col">
                            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent text-4xl sm:text-5xl ">
                                Gabriel Alves Lopes
                            </span>
                            <span className="text-2xl sm:text-3xl lg:text-4xl">
                                Desenvolvedor Full-Stack
                            </span>
                        </span>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="text-gray-300 text-base sm:text-lg lg:max-w-[600px]"
                    >
                        Como desenvolvedor Full-Stack, tenho experiência tanto no <span className="font-bold">Front-end</span>, criando interfaces interativas com tecnologias como <span className="font-bold">React</span> e <span className="font-bold">Next.js</span>, quanto no <span className="font-bold">Back-end</span>, utilizando <span className="font-bold">Python</span> e <span className="font-bold">Nest.Js</span>. Meu objetivo é criar aplicações completas e escaláveis, com foco na experiência do usuário e na performance. 
                    </motion.p>

                    <motion.div
                        variants={slideInFromLeft(1)}
                        className="flex w-full flex-col sm:flex-row items-center gap-5 sm:justify-center lg:justify-start"
                    >
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/gabriel-alves-lopes-1719ba236/"
                            className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/1PtJNYGuXIW6IQ6EWf0dZnHi2aqdo7505/view?usp=drive_link"
                            className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105"
                        >
                            Currículo
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    variants={slideInFromRight(0.8)}
                    className="mt-8 lg:mt-0 lg:ml-10"
                >
                    <Image
                        src="/img/imgportigolio.jpg"
                        className="rounded-full mx-auto"
                        alt="hero image computador e mãos programando"
                        height={650}
                        width={650}
                        style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                        sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 650px"
                        priority
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}