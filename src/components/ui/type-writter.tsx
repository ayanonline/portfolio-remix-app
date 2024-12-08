import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
    text: string;
    speed?: number; // Speed of the typing effect (in milliseconds per character)
    delay?: number; // Optional delay before typing starts
    className?: string; // Optional className for the text
}

const TypeWriter: React.FC<TypeWriterProps> = ({
    text,
    speed = 25,
    delay = 0,
    className = "",
}) => {
    const [displayedText, setDisplayedText] = useState<string>("");

    useEffect(() => {
        if (!text) return; // Avoid running if text is empty or undefined

        let index = 0;
        const timer = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index += 1;
            if (index === text.length) {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer); // Clean up the timer on component unmount
    }, [text, speed]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
        >
            <p className={className}>{displayedText}</p>
        </motion.div>
    );
};

export default TypeWriter;
