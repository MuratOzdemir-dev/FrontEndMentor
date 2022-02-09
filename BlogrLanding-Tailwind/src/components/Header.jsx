import { useState } from "react";
import logoSrc from "../style/images/logo.svg";
import closeSrc from "../style/images/icon-close.svg";
import hamburgerSrc from "../style/images/icon-hamburger.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const [isConnectMenuOpen, setIsConnectMenuOpen] = useState(false);
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
          <li className="cursor-pointer">
            <h3 onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}>
              Product
            </h3>
            <ul
              className={`space-y-4 overflow-clip rounded-md bg-slate-200  transition-all   ${
                isProductMenuOpen ? "max-h-32 py-4" : "max-h-0"
              }`}
            >
              <li className="cursor-pointer">Product 1</li>
              <li className="cursor-pointer">Product 2</li>
              <li className="cursor-pointer">Product 3</li>
            </ul>
          </li>

          <li className="cursor-pointer">
            <h3 onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}>
              Company
            </h3>
            <ul
              className={`space-y-4 overflow-clip rounded-md bg-slate-200  transition-all   ${
                isCompanyMenuOpen ? "max-h-32 py-4" : "max-h-0"
              }`}
            >
              <li className="cursor-pointer">Address</li>
              <li className="cursor-pointer">Our Company</li>
              <li className="cursor-pointer">About</li>
            </ul>
          </li>

          <li className="cursor-pointer">
            <h3 onClick={() => setIsConnectMenuOpen(!isConnectMenuOpen)}>
              Connect
            </h3>
            <ul
              className={`space-y-4 overflow-clip rounded-md bg-slate-200  transition-all   ${
                isConnectMenuOpen ? "max-h-32 py-4" : "max-h-0"
              }`}
            >
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Newsletter</li>
              <li className="cursor-pointer">Linkedin</li>
            </ul>
          </li>
        </ul>
        <hr />
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
