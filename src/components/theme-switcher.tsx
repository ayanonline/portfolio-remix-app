import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      variant="light"
      radius="full"
      onPress={handleChangeTheme}
    >
      {theme === "dark" ? (
        <IoSunnyOutline className="text-2xl" />
      ) : (
        <IoMoon className="text-2xl" />
      )}
    </Button>
  );
}
