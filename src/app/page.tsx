import NavigationBar from "@/components/NavigationBar";
import Banner from "@/components/Banner";
import SobreMim from "@/components/SobreMim";
import Habilidades from "@/components/Habilidades";

export default function Home() {
  return (
    <div className="relative pb-16">

        <NavigationBar />
        
        <main className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">

            <div className="mb-56">
                <Banner />
            </div>

            <div className="mb-56 pt-24" id="sobre-mim">
                <SobreMim  />
            </div>

            <div className="h-96 mb-56 pt-24" id="habilidades">
                <Habilidades />
            </div>

        </main>

        <footer>

        </footer>
    </div>
  );
}
