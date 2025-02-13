import { motion } from "motion/react";
import { Link } from "react-router-dom";

function MenuNav({ setIsOpen }) {
  return (
    <motion.main className="flex mt-10 gap-2 lg:pr-10 h-[50%] justify-center items-center">
      <p className="-rotate-90 w-fit h-fit mt-5 lg:mt-6 font-bold self-start">MENU</p>
      <nav className="flex flex-col max-[400px]:text-4xl text-5xl lg:text-6xl list-none font-semibold text-black gap-4 lg:self-end">
        <Link to="home" onClick={() => setIsOpen(false)}>
          HOME
        </Link>
        <Link to="projects" onClick={() => setIsOpen(false)}>
          PROJECTS
        </Link>
        <Link to="about" onClick={() => setIsOpen(false)}>
          ABOUT
        </Link>
        <Link to="contact" onClick={() => setIsOpen(false)}>
          CONTACT
        </Link>
      </nav>
    </motion.main>
  );
}

export default MenuNav;
