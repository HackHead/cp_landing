import { Icons } from "../atoms/icons";
import { v4 as uuid } from 'uuid';
import Feature, { FeatureProps } from "../molecules/feature";

const FEATURES = [
    { id: uuid(), icon: <Icons.iban />, label: 'IBAN' },
    { id: uuid(), icon: <Icons.internationalTransfer />, label: 'International Transfers' },
    { id: uuid(), icon: <Icons.currencyExchange />, label: 'Currency Exchange' },
    { id: uuid(), icon: <Icons.onlineOnboarding />, label: 'Online Onboarding' },
    { id: uuid(), icon: <Icons.wallet />, label: 'Customer Support' },
    { id: uuid(), icon: <Icons.phoneExchange />, label: 'Secured Transfers' }
] as (FeatureProps & { id: string })[];

export default function FeaturesSection() {
    return (
        <section>
            <div className="grid grid-cols-3 lg:grid-cols-6 pt-12 pb-20 gap-20 max-w-6xl 2xl:max-w-7xl mx-auto px-10 lg:px-0 sm:px-5 md:px-3">
                {FEATURES.map(feature => (
                    <Feature
                        key={feature.id}
                        icon={feature.icon}
                        label={feature.label}
                    />
                ))}
            </div>
        </section>
    )
}
