import NavigationBar from "@/components/NavigationBar";
import Banner from "@/components/Banner";
import SobreMim from "@/components/SobreMim";
import Habilidades from "@/components/Habilidades";

export default function Home() {
    return (
        <div>
            <NavigationBar />
            <main className="mt-20 lg:mt-0">
                <Banner />
                <Habilidades />
            </main>
            <footer></footer>
        </div>
    );
}
