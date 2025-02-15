import lightLogo from "../assets/light-logo.png";
import bars from "../assets/bars.png";
import { AnimatePresence, motion } from "motion/react";
import Menu from "./Menu";
import { useState, memo, useCallback } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

const animation = {
  hover: { scale: 1.1 },
};

const Header = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <AnimatePresence>{isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}</AnimatePresence>
      <header className="flex items-center w-[100vw] h-[20vh] absolute top-0 bg-transparent">
        <img className="absolute max-sm:top-2 max-sm:left-6 left-16 h-[70%] w-fit scale-80" src={lightLogo} alt="Logo" />
        <motion.img
          onClick={handleOpen}
          whileHover={animation.hover}
          src={bars}
          className="absolute max-sm:right-10 max-sm:top-10 right-14 top-16 cursor-pointer"
        />
      </header>
      {location.pathname === "/" && <section className="w-[100vw] h-[100vh] bg-black"></section>}
      <Outlet />
    </>
  );
});

export default Header;
