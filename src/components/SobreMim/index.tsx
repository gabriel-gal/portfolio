import styles from '@/styles/SobreMim/Index.module.css'

export default function SobreMim() {
    return (
        <div className='text-white'>
            <h1 className={`${styles.texth1}`}>Sobre mim</h1>
            <div className={`${styles.containertext} mt-3`}>
                <p className={`${styles.text}`}>
                    Meu nome é Gabriel Alves Lopes, sou graduando em Sistemas de Informação pela UNISANTA e Desenvolvedor Front-end. 
                    Atuo na criação de páginas web e mobile, focando em layouts atrativos e responsivos. Minha jornada na programação 
                    começou pela paixão em resolver problemas e criar soluções inovadoras. A constante evolução tecnológica me motiva 
                    a buscar conhecimento, explorar novas ferramentas. Adoro enfrentar desafios complexos, transformar 
                    ideias em interfaces interativas e contribuir para projetos inovadores. A colaboração em equipes 
                    e a troca de conhecimento são fundamentais na minha jornada. Estou animado para continuar crescendo e contribuir 
                    para o desenvolvimento de soluções no mundo digital.
                </p>

                <p className={`${styles.text} mt-3`}>
                    Meu objetivo é não apenas crescer na área de desenvolvimento, mas tornar-me uma referência, indo além de ser 
                    apenas mais um funcionário. Busco agregar valor à sociedade por meio da entrega de soluções inovadoras e impactantes 
                    no campo da tecnologia, destacando-me como um profissional que faz a diferença.
                </p>
            </div>
        </div>
    )
}