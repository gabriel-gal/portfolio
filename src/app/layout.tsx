import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Portfólio Gabriel",
    description: "Portfólio do Gabriel Alves Lopes",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={dmSans.className}>
                {children}
            </body>
        </html>
    )
}