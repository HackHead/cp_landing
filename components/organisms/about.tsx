import Image from "next/image";
import Triangle from "../atoms/triangle";

export default function AboutSection() {
    return (
        <section className="bg-dark relative">
            <div className="pt-10 pb-8 lg:pt-24 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl 2xl:max-w-7xl mx-auto px-10 lg:px-0 sm:px-5 md:px-3">
                <div>
                    <h2 className="uppercase text-primary font-extrabold text-3xl lg:text-6xl text-center w-full">About us</h2>
                    <div className="text-white font-medium space-y-8 mt-5 md:mt-10 lg:mt-16 text-lg leading-9 tracking-widest">
                        <p>
                            Collect & Pay is a FinTech company that developed a state of the art technological solution for global cash flow management and international payments for your business.
                        </p>
                        <p>
                            Our company is registered in AFC, regulated by AFSA. Our offices located in North America, Europe, Asia and Africa.
                        </p>
                        <p>
                            Open an international payment account in 3 business days and be able to send and receive money from your customers anywhere in the world.
                        </p>
                    </div>
                </div>
                <div className="justify-end hidden lg:flex">
                    <Image
                        src={"/img/building.webp"}
                        alt="building image"
                        width={3024}
                        height={4032}
                        className="max-h-[580px] w-auto"
                    />
                </div>
            </div>
            <Triangle
                position="bottom-right"
                color="var(--primary)"
            />
        </section>
    )
}