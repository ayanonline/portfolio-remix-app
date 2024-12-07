import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-[16px] py-[64px] sm:px-[80px] sm:py-[96px]">
      {children}
    </div>
  );
};

export default Container;
