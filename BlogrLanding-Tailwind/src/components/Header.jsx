import { useState } from "react";
import logoSrc from "../style/images/logo.svg";
import closeSrc from "../style/images/icon-close.svg";
import hamburgerSrc from "../style/images/icon-hamburger.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container relative z-20 mx-auto flex items-center justify-between p-4">
      <img src={logoSrc} alt="Logo" className="cursor-pointer" />
      <img
        src={isOpen ? closeSrc : hamburgerSrc}
        alt="hamburger menu"
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      <nav
        className={`absolute top-16 left-4 right-4 z-50 rounded-md bg-white p-6 text-center ${
          !isOpen && "hidden"
        }`}
      >
        <ul className="space-y-4 ">
          <li>Product</li>
          <li>Company</li>
          <li>Connect</li>
        </ul>
        <hr />
        <button>Login</button>
        <button>Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
