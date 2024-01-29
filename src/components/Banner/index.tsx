import styles from '@/styles/Banner/Index.module.css'
import { Iceland } from "next/font/google"

const iceland = Iceland({ 
    subsets: ["latin"],
    weight: ["400"] });

export default function Banner(){
    return(
        <div className={`${styles.container}`}>
            <div className='w-full h-full flex justify-center items-center'>
                <div className={`${styles.containerimg}`}>
                    <img className={`${styles.img}`} src="img/imgportigolio.jpg" alt="Minha foto pessoal." />
                </div>
            </div>
            <div className='w-full h-full flex justify-start items-center px-8'>
                <div className={`${iceland.className} ${styles.text}`}>
                    Eu sou Gabriel, Dev &nbsp;
                    <span className={`${styles.textazul}`}>
                        Front-End
                    </span>
                </div>            
            </div>
        </div>
    )
}