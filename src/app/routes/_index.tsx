import AboutSection from "src/components/about-section";
import HeroSection from "src/components/hero-section";
import FadeIn from "src/components/ui/fade-in";

const Index = () => {
    return (
        <>
            <HeroSection />
            <FadeIn duration={2}>
                <AboutSection />
            </FadeIn>
        </>
    );
};

export default Index;
