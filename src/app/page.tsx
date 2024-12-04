import NavigationBar from "@/components/NavigationBar";
import Banner from "@/components/Banner";
import Habilidades from "@/components/Habilidades";
import Projetos from "@/components/Projetos";

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <main className="mt-20 lg:mt-0">
                <Banner />
                <Habilidades />
                <Projetos />
            </main>
            <footer></footer>
        </div>
    );
}
