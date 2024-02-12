import { Button } from "../atoms/button";
import { Card } from "../atoms/card";
import { Icons } from "../atoms/icons";
import Triangle from "../atoms/triangle";

export default function OnboardingSection() {
    return (
        <section className="bg-dark relative">
            <div className="pt-10 pb-8 lg:pt-24 lg:pb-20  max-w-6xl 2xl:max-w-7xl mx-auto px-10 lg:px-0 sm:px-5 md:px-3">
                <h2 className="uppercase text-white font-extrabold text-3xl lg:text-6xl text-center w-full">Onboarding Process</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
                    <Card className="border border-primary space-y-8 py-10">
                        <div className="flex justify-center w-full">
                            <Icons.form className="max-w-24" />
                        </div>
                        <span className="inline-block text-white text-3xl text-center w-full">
                            Fill the application form
                        </span>
                    </Card>
                    <Card className="border border-primary space-y-8 py-10">
                        <div className="flex justify-center w-full">
                            <Icons.clientVeification className="max-w-24" />
                        </div>
                        <span className="inline-block text-white text-3xl text-center w-full">
                            Upload basic KYC Documents
                        </span>
                    </Card>
                    <Card className="border border-primary space-y-8 py-10">
                        <div className="flex justify-center w-full">
                            <Icons.check className="max-w-24" />
                        </div>
                        <span className="inline-block text-white text-3xl text-center w-full">
                            Complete verification and start using your account
                        </span>
                    </Card>
                </div>
                <div className="flex justify-center mt-8">
                    <Button type="submit" className="font-extrabold text-dark bg-primary h-14 min-w-96 mx-auto my-6 uppercase hover:bg-white duration-300">Open an account</Button>
                </div>
            </div>
            <Triangle
                position="bottom-left"
                color="var(--primary)"
            />
        </section>
    )
}