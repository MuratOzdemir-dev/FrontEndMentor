import logoSrc from "../images/logo.svg";
import hamburgerSrc from "../images/icon-hamburger.svg";
import introBgSrc from "../images/bg-pattern-intro-mobile.svg";
import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-bl-[5rem] bg-gradient-to-r from-gradient-introFrom to-gradient-introTo px-4 pt-6 pb-24">
      <Header />
      <div className="content relative z-20">
        {/* Text Content */}
        <div className="space-y-4 py-8 text-center text-white">
          <h1 className="text-3xl ">A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
        </div>
        {/* Buttons */}
        <div className="flex justify-center gap-2  font-ubuntu">
          <button className="w-32 rounded-3xl  bg-white py-2 text-primary-lightRed transition-all hover:bg-primary-veryLightRed hover:text-white">
            Start for Free
          </button>
          <button className="w-32 rounded-3xl border-2 border-white py-2 text-white transition-all hover:bg-white hover:text-primary-lightRed">
            Learn More
          </button>
        </div>
      </div>

      {/* BG Image */}
      <div className="absolute -top-52 -left-40 z-10 w-[200%] min-w-[700px] max-w-4xl">
        <img src={introBgSrc} alt="intro bg" />
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <header className="container relative z-20 mx-auto flex items-center justify-between">
      <img src={logoSrc} alt="Logo" />
      <img src={hamburgerSrc} alt="Logo" />
    </header>
  );
};

export default Hero;
