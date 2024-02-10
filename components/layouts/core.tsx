import { ReactNode } from "react"
import Header from "@/components/organisms/header";
import Footer from "../organisms/footer";

export type CoreLayoutProps = {
    children: ReactNode;
}
export default function CoreLayout({
    children,
}: CoreLayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}