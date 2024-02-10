import Link from "next/link";
import { Icons } from "../atoms/icons";

export default function Header() {
    return (
        <header className="h-24 bg-dark w-full text-white ">
            <div className="max-w-6xl mx-auto flex items-center justify-start h-full">
                <Link href={'/'} >
                    <Icons.brand />
                </Link>
            </div>
        </header>
    )
}