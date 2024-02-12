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
            <HeroSection />
            <FeaturesSection />
            <MetricsGroup />
            <AboutSection />
            <GetInTouchSection />
            <OnboardingSection />
            <FaqSection />
        </>
    )
}