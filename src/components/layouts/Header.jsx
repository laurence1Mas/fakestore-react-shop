import React from "react";

export default Header;
import React, { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef(null);

  // Focus input quand il s'ouvre
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      console.log("Searching for:", inputValue);
      setIsSearchOpen(false);
      setInputValue("");
    }
  };

  // Fermer l'input si l'utilisateur appuie sur Entrée
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  // Gestion animation menu mobile
  useEffect(() => {
    if (isMenuOpen) {
      setShouldRenderMenu(true);
    } else {
      const timeout = setTimeout(() => setShouldRenderMenu(false), 300); // durée animation
      return () => clearTimeout(timeout);
    }
  }, [isMenuOpen]);

  return (
    <header className="w-full flex items-center justify-between p-6 md:p-12 relative">
      <h1 className="text-2xl md:text-3xl font-semibold">FastShop</h1>

      {/* Menu desktop */}
      <nav className="hidden md:flex items-center gap-4 md:gap-8">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Outlet />
      </nav>

      {/* Section boutons */}
      <section className="flex items-center justify-center gap-4">
        {/* Search Button / Input */}
        <Button
          variant="secondary"
          size="icon"
          className={`rounded-full ${isSearchOpen ? "hidden" : null}`}
          onClick={() => setIsSearchOpen(true)}
        >
          <FaSearch />
        </Button>

        {isSearchOpen && (
          <div className="absolute top-[6rem] md:top-[10rem] left-1/2 right-1/2 transform -translate-x-1/2 w-[90vw] md:w-1/2 min-h-[10rem]  bg-foreground/90 p-8 md:p-12  shadow-md flex items-center gap-2 z-20">
            <Input
              ref={searchRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
              type="text"
              placeholder="Search products..."
              className="w-[85%]  transition-all duration-300 bg-muted border-none  outline-none rounded-full"
            />

            <Button
              variant="secondary"
              size="icon"
              className={`rounded-full`}
              onClick={() => handleSearch()}
            >
              <FaSearch />
            </Button>
          </div>
        )}

        {/* Cart Button */}
        <Button variant="secondary" size="icon" className="rounded-full">
          <FaCartShopping />
        </Button>

        {/* User Button */}
        <Button variant="secondary" size="icon" className="rounded-full">
          <FaUser />
        </Button>
      </section>

      {/* Burger menu mobile */}
      <button
        className="md:hidden h-8 w-8 text-3xl flex items-center justify-center text-foreground hover:scale-110 transition-transform duration-300 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoCloseSharp /> : <HiOutlineMenu />}
      </button>

      {/* Menu mobile */}
      {shouldRenderMenu && (
        <nav
          className={`md:hidden flex flex-col items-start gap-y-10 absolute top-0 left-0 w-full bg-background/90 px-8 pt-16 transition-all duration-300 z-10
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          <Link
            to="/"
            className="w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            Features
          </Link>
          <Link
            to="/electronics"
            className="w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            Electronics
          </Link>
          <Link
            to="/about"
            className="w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="w-full pb-5 border-b-2 border-foreground/20 text-xl font-medium hover:text-foreground/70"
          >
            Blog
          </Link>

          <Outlet />

          <Button
            variant="default"
            size="default"
            className="w-1/2 mx-auto mt-5 text-md font-semibold bg-chart-1 hover:bg-chart-1/90 text-primary-foreground"
          >
            Sign In
          </Button>
        </nav>
      )}
    </header>
  );
}

export default Header;
