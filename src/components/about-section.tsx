import { Chip, Image } from "@nextui-org/react";
import Container from "./ui/container";

const AboutSection = () => {
    return (
        <Container>
            <div className="flex justify-center">
                <Chip>About me</Chip>
            </div>
            <div className="mt-12 flex flex-col justify-between gap-12 sm:flex-row">
                <div className="mx-auto sm:mx-0">
                    <Image src="/ayan.jpg" className="h-80" />
                </div>

                <div className="flex flex-col gap-6 sm:w-1/2">
                    <h3 className="h3 text-light-900 dark:text-dark-900">
                        Curious about me? Here you have it:
                    </h3>
                    <p className="body2 text-light-600 dark:text-dark-600">
                        I&apos;m a passionate full-stack developer, specializing
                        in React.js and Node.js. I thrive on bridging the gap
                        between technical and visual aspects to bring digital
                        products to life. From delivering seamless user
                        experiences to pixel-perfect designs and writing clean,
                        high-performance code, I&apos;m dedicated to excellence
                        in every detail.
                    </p>

                    <p className="body2 text-light-600 dark:text-dark-600">
                        My journey as a web developer began in 2023, and in just
                        under two years, I&apos;ve immersed myself in the world
                        of modern web development. Currently, I&apos;m proud to
                        be part of Nature Technologies, where I contribute to
                        building cutting-edge applications using frameworks and
                        tools like React.js, TailwindCSS, Material-UI (MUI), and
                        Redux.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default AboutSection;
