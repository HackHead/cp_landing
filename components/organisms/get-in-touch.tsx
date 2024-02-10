import Triangle from "../atoms/triangle";
import ContactForm from "./contact-form";

export default function GetInTouchSection() {
    return (
        <section className="relative">
            <Triangle
                position="top-right"
                color="var(--primary)"
            />
            <div className="grid grid-cols-12 gap-20 py-20 max-w-6xl mx-auto">
                <div className="col-span-4">
                    <h2 className="uppercase text-primary font-extrabold text-6xl">
                        Open an account in 3 simple steps
                    </h2>
                </div>
                <div className="col-span-8 col-start-5 flex">
                    <div>
                        <ContactForm />
                        <span className="font-medium text-input-text text-center block text-sm px-10">
                            By clicking the button, you confirm that you have read and accepted the Terms & Conditions.
                            Your personal data will be processed according to Terms & Conditions and Privacy Policy.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}