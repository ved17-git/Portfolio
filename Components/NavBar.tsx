"use client";
import React, { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,

} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import logoLight from "../Assets/logo.png";
import logoDark from "../Assets/logoDark.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const menuItems = [
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Ensure theme is loaded to avoid hydration mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDark = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Early return to avoid hydration errors
  if (!isMounted) return null;

  return (
    <>
      <Navbar
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="mx-auto rounded-lg sm:w-[95%] px-4 my-3 shadow-md border border-zinc-400 bg-white dark:bg-black dark:shadow-zinc-800 dark:border-none"
        id="navbar"
        aria-label="Main navigation"
      >
        <NavbarContent className="flex items-center justify-between">
          {/* Logo Section */}
          <NavbarItem className="font-title">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src={resolvedTheme === "dark" ? logoDark : logoLight}
                alt="Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
          </NavbarItem>

          {/* Menu Links */}
          <div className="hidden sm:flex gap-6">
            {menuItems.map((item, index) => (
              <NavbarItem key={index} className="font-title">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </div>

          {/* Theme Toggle + Menu */}
          <NavbarContent justify="end" className="flex items-center gap-4">
            <button
              onClick={handleDark}
              aria-label="Toggle Theme"
              className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg"
            >
              {resolvedTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              className="sm:hidden"
            />
          </NavbarContent>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="sm:hidden bg-white dark:bg-black">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={index}
              className="px-4 py-2 text-lg font-title border-b dark:border-gray-700"
            >
              <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default NavBar;
