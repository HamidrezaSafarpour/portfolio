import { Link, useLocation } from "react-router-dom";
import logo from "../assets/light-logo.png";
import { useEffect } from "react";
import { animateScroll } from "react-scroll";

function Footer() {
  const { pathname } = useLocation();

  useEffect(() => {
    animateScroll.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="flex max-md:flex-col max-md:gap-16 items-center justify-between max-md:justify-center w-full h-[30vh] bg-black mt-10 max-[370px]:px-10 p-20">
      <nav className="flex w-full md:w-[20%] h-[20%] md:h-full gap-4 justify-between text-white lg:text-lg font-semibold">
        <Link to="projects">Projects</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
      <section className="flex max-md:flex-row-reverse w-full md:w-[60%] h-[80%] md:h-full justify-center md:justify-between items-start max-md:items-center gap-10">
        <div className="flex flex-col text-white max-[420px]:text-xs max-[520px]:text-sm lg:text-lg font-semibold">
          <p>hamidreza.safarpour01@gmail.com</p>
          <a href="tel:+989944618481">+98 994 461 8481</a>
        </div>
        <img src={logo} alt="Logo" className="h-[70px]" />
      </section>
    </footer>
  );
}

export default Footer;
