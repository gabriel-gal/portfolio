"use client";
import styles from '@/styles/NavigationBar/TextNavigation.module.css'
import { useEffect, useRef, useState } from 'react';
import ButtonDark from "./ButtonDark";

export default function NavigationBar(){

    const ref = useRef<HTMLElement>(null);
    const [intersecao, setIntersecao] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecao(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-700 border-b  ${
                    intersecao
                        ? "bg-zinc-900/0 border-transparent"
                        : " bg-slate-900/70 border-zinc-800 "
                }`}
            >
                <div className="container flex items-center justify-between p-6 mx-auto">

                    <div className="w-8 h-8 bg-white">
                        
                    </div>
                        <div className="flex justify-between gap-8">
                            <a className={`${styles.navigationtext}`} href="#sobre-mim">Sobre mim</a>
                            <a className={`${styles.navigationtext}`} href="#projeto">Projetos</a>
                            <a className={`${styles.navigationtext}`} href="#habilidade">Habilidades</a>
                            <a className={`${styles.navigationtext}`} href="#experiencia">Experiência</a>
                            <a className={`${styles.navigationtext}`} href="#contato">Contato</a>
                        </div>

                        <ButtonDark />
                </div>
            </div>
		</header>
    )
}