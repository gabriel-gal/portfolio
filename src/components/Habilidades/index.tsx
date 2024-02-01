import styles from '@/styles/Habilidades/Index.module.css'
import Image  from 'next/image'

import htmlSvg from '@/../public/svg/html.svg'
import cssSvg from '@/../public/svg/css.svg'
import jsSvg from '@/../public/svg/js.svg'
import reactSvg from '@/../public/svg/react.svg'
import nextSvg from '@/../public/svg/next.svg'
import tailwindSvg from '@/../public/svg/tailwind.svg'
import bootstrapSvg from '@/../public/svg/bootstrap.svg'
import pythonSvg from '@/../public/svg/python.svg'
import dockerSvg from '@/../public/svg/docker.svg'

export default function Habilidades() {
    return (
        <div className='text-white w-full'>
            <h1 className={`${styles.texth1} grid`}>Habilidades</h1>
            <div className='text-white w-full justify-center items-center flex mt-8'>
                <div className={`${styles.containercard}`}>
                    <div className={`${styles.card}`}>
                        <Image
                            priority
                            width={100}
                            title='Html'
                            src={htmlSvg}
                            alt="Logo HTML"
                            className={`${styles.imgsvg}`}
                        />
                    </div>
                    <div className={`${styles.card}`}>
                        <Image
                            priority
                            width={100}
                            title='Css'
                            src={cssSvg}
                            alt="Logo CSS"
                            className={`${styles.imgsvg}`}
                        />
                    </div>
                    <div className={`${styles.card}`}>
                        <Image
                            priority
                            width={100}
                            title='JavaScript'
                            src={jsSvg}
                            alt="Logo JAVASCRIPT"
                        />
                    </div>
                    <div className={`${styles.card}`}>
                        <Image
                            priority
                            width={100}
                            title='React'
                            src={reactSvg}
                            alt="Logo REACT"
                            className={`${styles.imgsvg}`}
                        />
                    </div>
                    <div className={`${styles.card}`}>
                        <Image
                            priority
                            width={100}
                            title='Next.Js'
                            src={nextSvg}
                            alt="Logo NEXT.JS"
                            className={`${styles.imgsvg}`}
                        />
                    </div>
                    <div className={`${styles.card}`}>
                        <Image
                            priority
                            width={100}
                            title='TailWind'
                            src={tailwindSvg}
                            alt="Logo TAILWIND"
                            className={`${styles.imgsvg}`}
                        />
                    </div>
                    <div className={`${styles.card}`}>
                        <Image
                            priority
                            width={100}
                            title='BootStrap'
                            src={bootstrapSvg}
                            alt="Logo BOOTSTRAP"
                            className={`${styles.imgsvg}`}
                        />
                    </div>
                    <div className={`${styles.card}`} >
                        <Image
                            priority
                            width={100}
                            title='Python'
                            src={pythonSvg}
                            alt="Logo PYTHON"
                            className={`${styles.imgsvg}`}
                        />
                    </div>
                    <div className={`${styles.card}`}>
                        <Image
                            priority
                            width={100}
                            title='Docker'
                            src={dockerSvg}
                            alt="Logo Docker"
                            className={`${styles.imgsvg}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}