import Metric from "@/components/molecules/metric";
import MetricsGroup from "../organisms/metrics";
import AboutSection from "../organisms/about";
import GetInTouchSection from "../organisms/get-in-touch";
import OnboardingSection from "../organisms/onboarding";
import FaqSection from "../organisms/faq";
import FeaturesSection from "../organisms/features";
import HeroSection from "../organisms/hero";

export default function HomePage() {
    return (
        <>
            <div className="triangle"></div>
            <HeroSection />
            <FeaturesSection />
            <div className="py-32 bg-light-grey">
                <MetricsGroup className="max-w-6xl mx-auto" />
            </div>
            <AboutSection />
            <GetInTouchSection />
            <OnboardingSection />
            <FaqSection />
        </>
    )
}