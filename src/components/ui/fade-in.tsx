import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    duration?: number; // Optional duration for the fade-in and slide-up effect
    delay?: number; // Optional delay before the animation starts
    distance?: number; // Optional distance to slide up (default: 50px)
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    duration = 1,
    delay = 0,
    distance = 50, // Default slide distance
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ref = elementRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger animation when element comes into view
                }
            },
            { threshold: 0.2 }, // Trigger when 20% of the element is visible
        );

        if (elementRef.current) {
            observer.observe(elementRef.current); // Observe the current element only
        }

        return () => {
            if (ref) {
                observer.unobserve(ref); // Clean up observer when component unmounts
            }
        };
    }, []);

    return (
        <motion.div
            ref={elementRef}
            initial={{ opacity: 0, y: distance }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : distance,
            }}
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
