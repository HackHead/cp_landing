import Image from "next/image";
import { Button } from "../atoms/button";
import { Icons } from "../atoms/icons";

export default function HeroSection() {
    return (
        <section className="pt-24 pb-20">
            <div className="grid grid-cols-2 max-w-6xl 2xl:max-w-7xl mx-auto">
                <div className="div"></div>
                <div className="col-span-1">
                    <h2 className="uppercase text-dark font-extrabold text-3xl lg:text-6xl tracking-widest ">International</h2>
                </div>
            </div>

            <div className="bg-primary py-2 my-2">
                <div className="grid grid-cols-2 max-w-6xl 2xl:max-w-7xl mx-auto">
                    <div className="col-span-1 relative z-10">
                        <Image
                            src={"/img/laptop.webp"}
                            alt="building image"
                            width={4096}
                            height={2695}
                            className="w-[650px] max-w-full scale-150 absolute left-0 top-0 -translate-y-1/4 -translate-x-[90px] pointer-events-none selection:bg-transparent"
                        />
                    </div>
                    <div className="col-span-1 relative z-20">
                        <h3 className="uppercase text-dark font-semibold text-4xl tracking-widest">Payment account for business</h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 max-w-6xl 2xl:max-w-7xl mx-auto">
                <div></div>
                <div>

                    <h4 className="uppercase text-secondary font-medium text-2xl tracking-wider">Send and receive payments from your business partners fast and easy</h4>
                    <div className="flex justify-center mt-8">
                        <Button className="py-8 font-extrabold text-primary bg-dark h-14 w-full mx-auto my-6 uppercase hover:bg-white/50 hover:text-dark duration-300 flex items-center space-x-6">
                            <span>open an account now</span>
                            <Icons.arrowRight className="py-[2px]" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}