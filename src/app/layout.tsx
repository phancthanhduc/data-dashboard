import { Inter } from "next/font/google";
import { NextAuthProvider } from "@/NextAuthProviders";
import { MuiSetup } from "@/MuiSetup";
import Header from "@src/components/header/Header";
import WithUserSession from "@src/components/withUserSession/WithUserSession";
import Footer from "@src/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Data Dashboard",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MuiSetup>
                    <NextAuthProvider>
                        <Header />
                        <WithUserSession />
                        {children}
                        <Footer />
                    </NextAuthProvider>
                </MuiSetup>
            </body>
        </html>
    );
}
