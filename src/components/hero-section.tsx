import Container from "src/components/ui/container";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse sm:flex-row sm:gap-12">
        <div className="w-3/5">
          <h1 className="heading-h1">
            Hi, I&apos;m <span className="text-green-500">Ayan</span>👋
          </h1>
          <p>
            I&apos;m a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div>image</div>
      </div>
    </Container>
  );
};

export default HeroSection;
