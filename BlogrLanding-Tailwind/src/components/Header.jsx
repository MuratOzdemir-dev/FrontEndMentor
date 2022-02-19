import { useState } from "react";
import logoSrc from "../style/images/logo.svg";
import closeSrc from "../style/images/icon-close.svg";
import hamburgerSrc from "../style/images/icon-hamburger.svg";
import Button from "./UI/Button";
import NavItem from "./NavItem";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="container relative z-20 mx-auto flex items-center justify-between p-4">
      <img src={logoSrc} alt="Logo" className="cursor-pointer" />
      <img
        src={isMobileMenuOpen ? closeSrc : hamburgerSrc}
        alt="hamburger menu"
        className="cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <nav
        className={`absolute top-16 left-4 right-4 z-50 rounded-md bg-white p-6 text-center ${
          !isMobileMenuOpen && "hidden"
        }`}
      >
        <ul className="mb-4 space-y-4 ">
          <NavItem title="Product" items={["MacBook Air", "iMac", "Mac Pro"]} />
          <NavItem title="Company" items={["About", "Careers", "Blog"]} />
          <NavItem
            title="Connect"
            items={["Contact", "Newsletter", "Linkedin"]}
          />
        </ul>
        <hr />
        <div className="flex flex-col items-center gap-2 pt-4">
          <Button
            textColor="text-black"
            hover="hover:bg-primary-veryLightRed hover:text-white"
          >
            Login
          </Button>
          <Button
            textColor="text-black"
            hover="hover:bg-primary-veryLightRed hover:text-white"
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
