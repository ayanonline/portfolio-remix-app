import React from "react";
import { cn } from "src/utils/tailwind-utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
const Container: React.FC<Props> = ({ className, ...props }) => {
    return (
        <div
            {...props}
            className={cn(
                "px-[16px] py-[64px] sm:px-[80px] sm:py-[96px] lg:px-[20vw]",
                className,
            )}
        />
    );
};

export default Container;
