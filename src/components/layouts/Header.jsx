import React from "react";
import { Outlet, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" w-full h-auto flex items-center justify-between p-6 md:p-12 py-6 relative">
      <h1 className="text-2xl md:text-3xl font-semibold">FastShop</h1>

      <nav className=" hidden md:flex items-center gap-4 md:gap-8">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Outlet />
      </nav>
      <section className="flex items-center justify-center gap-4">
        <Button variant="secondary" size="icon" className="rounded-full">
          <FaSearch />{" "}
        </Button>
        <Button variant="secondary" size="icon" className="rounded-full">
          <FaCartShopping />{" "}
        </Button>
      </section>

      <button
        className="md:hidden h-8 w-8 text-3xl display-flex items-center justify-center text-foreground transition-transform duration-300 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoCloseSharp /> : <HiOutlineMenu />}
      </button>
      {isMenuOpen && (
        <nav className=" md:hidden flex flex-col items-start gap-4 md:gap-8 absolute top-0 left-0 w-full bg-background/90 px-8 py-6 z-10">
          <Link
            to="/"
            className=" w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            Home
          </Link>
          <Link
            to="/features"
            className=" w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            Features
          </Link>
          <Link
            to="/electronics"
            className=" w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            Electronics
          </Link>
          <Link
            to="/about"
            className=" w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            About
          </Link>
          <Link
            to="/blog"
            className=" w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            Blog
          </Link>
          <Outlet />

          <Button
            variant="default"
            size="default"
            className="w-1/2 mx-auto mt-5 text-md font-semibold bg-chart-1 hover:bg-chart-1/90 text-primary-foreground "
          >
            Sign In
          </Button>
        </nav>
      )}
    </header>
  );
}
export default Header;
