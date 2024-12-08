import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility to conditionally join and merge Tailwind CSS class names.
 *
 * @param inputs - Class names or conditions for class names.
 * @returns A string of merged and resolved class names.
 */
export function cn(...inputs: Parameters<typeof clsx>) {
    return twMerge(clsx(...inputs));
}
