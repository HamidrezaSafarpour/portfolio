import { motion } from "motion/react";
import line from "../assets/menu-lines.png";
import { memo } from "react";

function CloseMenu({ setIsOpen }) {
  return (
    <motion.div onClick={() => setIsOpen(false)} className="cursor-pointer">
      <motion.span
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        exit={{ opacity: 0, rotate: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-16 right-16"
      >
        <img src={line} />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: -45 }}
        exit={{ opacity: 0, rotate: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-16 right-16"
      >
        <img src={line} />
      </motion.span>
    </motion.div>
  );
}

export default memo(CloseMenu);
