import Link from "next/link";
import { Icons } from "../atoms/icons";

export default function Header() {
    return (
        <header className="h-24 bg-dark w-full text-white px-10 sm:px-10 md:px-10 lg:px-0">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex items-center justify-start h-full">
                <Link href={'/'} >
                    <Icons.brand />
                </Link>
            </div>
        </header>
    )
}