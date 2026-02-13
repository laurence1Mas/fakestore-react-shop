import React, { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { SearchContext } from "../../context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
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
  const { setSearchTerm } = useContext(SearchContext);
  const { totalItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Focus input quand il s'ouvre
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  // Fermer l'input si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  // Animation menu mobile
  useEffect(() => {
    if (isMenuOpen) {
      setShouldRenderMenu(true);
    } else {
      const timeout = setTimeout(() => setShouldRenderMenu(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isMenuOpen]);

  // 🔥 Fonction de recherche
  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setSearchTerm(inputValue); // envoie vers Product
      setInputValue("");
      setIsSearchOpen(false);
      navigate("/product"); // appel navigate ici, après le clic ou Enter
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <header className="w-full flex items-center justify-between p-4 md:px-12 md:py-5 bg-background fixed z-50">
      <h1 className="text-2xl md:text-3xl font-semibold">FastShop</h1>

      {/* Menu desktop */}
      <nav className="hidden md:flex items-center gap-4 text-lg font-medium md:gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/product">Product</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      {/* Section boutons */}
      <section className="flex items-center justify-center gap-4">
        {/* Search Button / Input */}
        <Button
          variant="secondary"
          size="icon"
          className={`rounded-full w-8 h-8 bg-muted ${isSearchOpen ? "hidden" : ""}`}
          onClick={() => setIsSearchOpen(true)}
        >
          <FaSearch />
        </Button>

        {isSearchOpen && (
          <div className="absolute top-[6rem] md:top-[10rem] left-1/2 transform -translate-x-1/2 w-[90vw] md:w-1/3 min-h-8 bg-foreground p-8 rounded-xl md:p-12 shadow-xl flex items-center gap-2 z-50">
            <Input
              ref={searchRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              type="text"
              placeholder="Search products..."
              className="w-[85%] transition-all duration-300 bg-muted border-none outline-none rounded-full focus-visible:ring-ring-1"
            />
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-muted"
              onClick={handleSearch}
            >
              <FaSearch />
            </Button>
          </div>
        )}

        {/* Cart Button */}
        <Link to="/cart" className="relative">
          <FaCartShopping />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        {/* User Button */}
        <Link to="/login">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full w-8 h-8 bg-muted"
          >
            <FaUser />
          </Button>
        </Link>
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
          className={`md:hidden flex flex-col items-start gap-y-3 absolute top-0 left-0 w-full bg-background/95 px-8 py-16 transition-all duration-300 z-10
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/product">Products</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
