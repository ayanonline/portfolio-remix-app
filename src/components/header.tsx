import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Navbar
            shouldHideOnScroll
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="full"
            classNames={{
                base: "px-[16px] lg:px-[20vw] sm:px-[80px] bg-light dark:bg-dark",
                wrapper: "px-0",
            }}
        >
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/">
                        <p className="text-2xl font-bold text-inherit">
                            <span className="text-green-500">{"<"}</span>A
                            <span className="text-green-500">G</span>
                            {"/>"}
                        </p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden gap-4 sm:flex" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="/about">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Work
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Testimonials
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <ThemeSwitcher />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button color="primary">Download CV</Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="sm:hidden">
                <NavbarItem>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="p-2"
                    />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem onClick={closeMenu}>
                    <Link color="foreground" href="/about">
                        About
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive>
                    <Link aria-current="page" href="#">
                        Work
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link color="foreground" href="#">
                        Testimonials
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <ThemeSwitcher />
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Button color="primary">Download CV</Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;
