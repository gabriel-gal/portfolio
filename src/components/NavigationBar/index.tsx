import MenuMobile from './MenuMobile'
import Menu from './Menu'

export default function NavigationBar() {
    return (
        <header>
            <div
                className="fixed top-0 z-50 h-[64px] w-full 
                bg-[#03001417] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md "
            >
                <div className="flex h-full w-full items-center justify-between  px-10">
                    <p className="text-sm font-semibold tracking-wider text-white md:text-xl">
                        GABRIEL ALVES LOPES
                    </p>
                    <Menu />
                    <MenuMobile />
                </div>
            </div>
        </header>
    )
}