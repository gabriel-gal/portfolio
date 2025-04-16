import NavigationBar from "@/components/NavigationBar"
import Habilidades from "@/components/Habilidades"
import Projetos from "@/components/Projetos"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Contato from "@/components/Contato"

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <main className="mt-20 lg:mt-0">
                <Banner />
                <Habilidades />
                <Projetos />
                <Contato />
            </main>
            <Footer />
        </div>
    );
}