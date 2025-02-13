import CloseMenu from "./CloseMenu";
import { AnimatePresence, motion } from "motion/react";
import MenuNav from "./MenuNav";
import MenuContact from "./MenuContact";

function Menu({ isOpen, setIsOpen }) {
  return (
    <motion.section
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.3 }}
      className="w-[100%] flex bg-white top-0 z-10 fixed justify-center items-center"
    >
      <AnimatePresence>{isOpen && <CloseMenu setIsOpen={setIsOpen} />}</AnimatePresence>
      <motion.main className="flex flex-col lg:flex-row justify-between gap-10">
        <AnimatePresence>{isOpen && <MenuNav />} </AnimatePresence>
        <AnimatePresence>{isOpen && <MenuContact />} </AnimatePresence>
      </motion.main>
    </motion.section>
  );
}

export default Menu;
