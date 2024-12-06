import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-black border-t-2 border-[#7042f861] h-16 flex justify-center px-10 items-center">
            <div className="flex gap-10">
                <a href={"https://github.com/gabriel-gal"} target={"_blank"}>
                    <Image
                        alt="globo"
                        src="/link-github.svg"
                        height={35}
                        width={35}
                    />
                </a>
                <a href={"https://codepen.io/gabriel-gal"} target={"_blank"}>
                    <Image
                        alt="globo"
                        src="/codepen.svg"
                        height={35}
                        width={35}
                    />
                </a>
                <a href={"https://www.linkedin.com/in/gabriel-alves-lopes-1719ba236/"} target={"_blank"}>
                    <Image
                        alt="globo"
                        src="/linkedin.svg"
                        height={35}
                        width={35}
                    />
                </a>
            </div>
        </footer>
    )
}