"use client"
import toast, { Toaster } from "react-hot-toast";
import { useSubimit } from "./hook/useSubmit";

export default function Contato() {

    const { submitEmail } = useSubimit()

    const handleSubmit = async (e: any) => { submitEmail(e) };

    return (
        <section
            id="contato"
            className="container mx-auto flex w-full flex-col items-center justify-center py-20 "
        >
            <Toaster position="bottom-right" reverseOrder={false} />

            <h2 className="text-clip bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text pb-10 text-5xl font-semibold text-transparent">
                Contato
            </h2>

            <div className="flex flex-wrap w-full lg:w-3/5 justify-center gap-8 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-full"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-2xl font-semibold text-white">Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Insira seu nome"
                            className="text-xl px-3 py-2 rounded-md bg-slate-400 bg-opacity-15 border border-white text-white focus:bg-opacity-40 transition duration-300 ease-in-out"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-2xl font-semibold text-white">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Insira seu e-mail"
                            className="text-xl px-3 py-2 rounded-md bg-slate-400 bg-opacity-15 border border-white text-white focus:bg-opacity-40 transition duration-300 ease-in-out"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="assunto" className="text-2xl font-semibold text-white">Assunto:</label>
                        <textarea
                            name="assunto"
                            placeholder="Digite o assunto da sua mensagem"
                            className="text-xl px-3 py-2 h-36 rounded-md bg-slate-400 bg-opacity-15 border border-white text-white focus:bg-opacity-40 transition duration-300 ease-in-out"
                            required
                        />
                    </div>

                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="Contato - Portfolio" />
                    <input type="hidden" name="_template" value="box" />

                    <div className="w-full flex justify-center mt-2">
                        <button
                            type="submit"
                            className="text-white bg-[#371975] text-2xl py-4 w-48 rounded-full hover:bg-[#241347] transition duration-300 ease-in-out"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
