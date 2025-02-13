import telegram from "../assets/telegram.png";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";

import { motion } from "motion/react";
import { Link } from "react-router-dom";

function MenuContact() {
  return (
    <motion.main className="flex flex-col h-[50%] lg:pl-10 justify-center gap-4 self-center lg:self-end font-semibold">
      <p className="max-[400px]:text-xs sm:text-sm">hamidreza.safarpour01@gmail.com</p>
      <p className="max-[400px]:text-xs sm:text-sm">+98 930 946 9684</p>
      <div className="flex w-full gap-3">
        <a href="https://github.com/HamidrezaSafarpour" className="size-6">
          <img src={github} />
        </a>
        <a
          href="https://
www.linkedin.com/in/hamidrezasafarpour"
          className="size-6"
        >
          <img src={linkedIn} />
        </a>
        <a href="https://t.me/hamid_rsm" className="size-6">
          <img src={telegram} />
        </a>
      </div>
    </motion.main>
  );
}

export default MenuContact;
