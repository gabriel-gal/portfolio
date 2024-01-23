import NavigationBar from "@/components/NavigationBar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    /*
    <div className="pr-20 pl-20">
      <div className="fixed z-10 top-0 w-full flex">
        <NavigationBar />
      </div>
      <div className="w-svw h-96">
        <Banner />
      </div>
    </div>*/

    <div className="relative pb-16">
        <NavigationBar />
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">

            <div className=" h-96">
                <Banner />
            </div>
            <div className=" h-96">
                <Banner />
            </div>
            <div className=" h-96">
                <Banner />
            </div>
            <div className=" h-96">
                <Banner />
            </div>
            <div className=" h-96">
                <Banner />
            </div>
            <div className=" h-96">
                <Banner />
            </div>
            <div className=" h-96">
                <Banner />
            </div>
            <div className=" h-96">
                <Banner />
            </div>
            <div className=" h-96">
                <Banner />
            </div>
        </div>
    </div>
  );
}
