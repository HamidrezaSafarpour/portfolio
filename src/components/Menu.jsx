import CloseMenu from "./CloseMenu";
import { AnimatePresence, motion } from "motion/react";

function Menu({ isOpen, setIsOpen }) {
  return (
    <motion.section
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.3 }}
      className="w-[100%] bg-white top-0 z-10 fixed"
    >
      <AnimatePresence>{isOpen && <CloseMenu setIsOpen={setIsOpen} />}</AnimatePresence>
    </motion.section>
  );
}

export default Menu;
