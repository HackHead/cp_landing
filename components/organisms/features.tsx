import { Icons } from "../atoms/icons";

export default function FeaturesSection() {
    return (
        <section>
            <div className="grid grid-cols-6 pt-12 pb-20 gap-20 max-w-6xl mx-auto">
                <div className="space-y-3">
                    <div className="flex justify-center"><Icons.iban /></div>
                    <span className="inline-block w-full text-center font-medium">IBAN</span>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-center"><Icons.internationalTransfer /></div>
                    <span className="inline-block w-full text-center font-medium">
                        International Transfers
                    </span>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-center"><Icons.currencyExchange /></div>
                    <span className="inline-block w-full text-center font-medium">
                        Currency Exchange
                    </span>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-center"><Icons.onlineOnboarding /></div>
                    <span className="inline-block w-full text-center font-medium">
                        Online Onboarding
                    </span>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-center"><Icons.wallet /></div>
                    <span className="inline-block w-full text-center font-medium">
                        Customer Support
                    </span>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-center"><Icons.phoneExchange /></div>
                    <span className="inline-block w-full text-center font-medium">
                        Secured Transfers
                    </span>
                </div>
            </div>
        </section>
    )
}