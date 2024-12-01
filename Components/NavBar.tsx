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
  Button,
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDark = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleClose = () => setIsMenuOpen(false);

  // Prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <>
      <Navbar
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="w-fit mx-auto rounded-lg sm:w-[95%] px-[6vh] sm:px-[1vh] my-3 shadow-md border-[1px] bg-white border-zinc-400 dark:bg-black dark:shadow-zinc-800 dark:border-none"
        id="navbar"
        aria-label="Main navigation"
      >
        <NavbarContent className="flex gap-[12vh] sm:justify-between lg:gap-[8vh] md:gap-[4vh]">
          <NavbarItem className="font-title w-5">
            <Link href="/" onClick={handleClose} aria-label="Home">
              <Image
                src={logoLight.src}
                alt="Logo Light"
                className="w-full dark:hidden"
                width={100}
                height={100}
              />
              <Image
                src={logoDark.src}
                alt="Logo Dark"
                className="w-full hidden dark:block"
                width={100}
                height={100}
              />
            </Link>
          </NavbarItem>

          {menuItems.map((item, index) => (
            <NavbarItem key={index} className="sm:hidden font-title">
              <Link href={item.href} aria-label={`Go to ${item.name}`} onClick={handleClose}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}

          <NavbarContent justify="end">
            <NavbarItem>
              <button
                onClick={handleDark}
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
                className="w-fit hover:bg-[#F4F4F5] p-2 rounded-xl dark:hover:bg-[#27272A] transition-transform duration-300 ease-in-out"
              >
                {resolvedTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </NavbarItem>

            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="hidden sm:block"
            />
          </NavbarContent>
        </NavbarContent>

        <NavbarMenu className="bg-white dark:bg-black">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index} className="pl-[0.5vh] mt-7 text-2xl font-title border-b-1 pb-1">
              <Link
                href={item.href}
                onClick={handleClose}
                aria-label={`Go to ${item.name}`}
                className="w-full"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <Button color="primary" aria-label="Button from NextUI">
        Button from nextui
      </Button>
    </>
  );
}

export default NavBar;
