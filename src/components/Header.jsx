import lightLogo from "../assets/light-logo.png";
import bars from "../assets/bars.png";
import { AnimatePresence, motion } from "motion/react";
import Menu from "./Menu";
import { useState, memo, useCallback } from "react";

const animation = {
  hover: { scale: 1.1 },
};

const Header = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <AnimatePresence>{isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}</AnimatePresence>
      <header className="flex items-center w-[100vw] h-[20vh] absolute top-0 bg-transparent">
        <img className="absolute max-[400px]:left-6 left-16 h-[70%] w-fit scale-80" src={lightLogo} alt="Logo" />
        <motion.img onClick={handleOpen} whileHover={animation.hover} src={bars} className="absolute max-[400px]:right-6 right-16 cursor-pointer" />
      </header>
    </>
  );
});

export default Header;
