import { NextUIProvider } from "@nextui-org/react";
import { useHref, useNavigate } from "@remix-run/react";
import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Provider;
