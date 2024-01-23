import styles from '@/styles/Banner/Imagem.module.css'

export default function Banner(){
    return(
        <div className={`${styles.container}`}>
            <div className='w-full h-full flex justify-center items-center'>
                <div className={`${styles.img}`}>
                    FOTO
                </div>
            </div>
            <div className='w-full h-full flex justify-start items-center'>
            <div>Eu sou Gabriel </div>
            </div>
        </div>
    )
}