import { Image } from "@nextui-org/react";
import { BsDot } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Container from "src/components/ui/container";
import FadeIn from "./ui/fade-in";

const HeroSection = () => {
    return (
        <Container className="bg-light dark:bg-dark">
            <div className="flex flex-col-reverse items-start gap-12 sm:flex-row">
                <div className="sm:w-3/5">
                    <div>
                        <FadeIn>
                            <h1 className="h1">
                                Hi, I&apos;m{" "}
                                <span className="text-green-500">Ayan</span>👋
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="body2 mt-2 text-light-600 dark:text-dark-600">
                                I&apos;m a passionate full-stack developer with
                                expertise in React.js and Node.js, dedicated to
                                crafting exceptional digital experiences.
                                Whether it&apos;s building fast, accessible,
                                visually captivating, and responsive web
                                applications or adding a creative design touch,
                                I bring over a year of hands-on experience and
                                an undying enthusiasm for web development.
                                Let&apos;s create something amazing together!
                            </p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.4}>
                        <div className="body2 my-12 text-light-600 dark:text-dark-600">
                            <p className="flex items-center gap-1">
                                <IoLocationOutline className="h-6 w-6" />{" "}
                                Kolkata, India
                            </p>
                            <p className="flex items-center gap-1">
                                <BsDot className="h-6 w-6 text-green-500" />{" "}
                                Available for new projects
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="flex items-center gap-2">
                            <FiGithub className="text-light-600 dark:text-dark-600" />
                            <FaLinkedinIn className="text-light-600 dark:text-dark-600" />
                        </div>
                    </FadeIn>
                </div>

                <div className="mx-auto">
                    <FadeIn>
                        <Image src="/ayan.jpg" className="h-52" />
                    </FadeIn>
                </div>
            </div>
        </Container>
    );
};

export default HeroSection;
