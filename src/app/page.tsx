import NavigationBar from "@/components/NavigationBar"
import Habilidades from "@/components/Habilidades"
import Projetos from "@/components/Projetos"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <main className="mt-20 lg:mt-0">
                <Banner />
                <Habilidades />
                <Projetos />
            </main>
            <Footer />
        </div>
    );
}