import { Button } from "../atoms/button";
import { Input } from "../atoms/input";

export default function ContactForm() {
    return (
        <form action="" className="space-y-3">
            <Input
                placeholder="Name"
            />
            <Input
                placeholder="Surname"
            />
            <Input
                placeholder="Company name"
            />
            <Input
                type="Email"
                placeholder="Email"
            />
            <Input
                type="Email"
                placeholder="Country"
            />
            <Input
                type="Email"
                placeholder="Phone number"
            />
            <div className="flex justify-center">
                <Button type="submit" className="font-extrabold text-primary bg-dark h-14 min-w-72 mx-auto my-6 uppercase hover:bg-white/50 hover:text-dark duration-300">Open an account</Button>
            </div>
        </form>
    )
}