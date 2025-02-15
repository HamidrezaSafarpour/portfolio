import lightLogo from "../assets/light-logo.png";
import bars from "../assets/bars.png";
import { motion } from "motion/react";
import Menu from "./Menu";
import { memo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure } from "@heroui/react";
import CloseMenu from "./CloseMenu";

const animation = {
  hover: { scale: 1.1 },
};

const Header = memo(function Header() {
  const location = useLocation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <header className="flex items-center w-[100vw] h-[15vh] absolute top-0 bg-transparent">
        <img className="absolute max-sm:top-2 max-sm:left-6 left-16 h-[70%] w-fit scale-80" src={lightLogo} alt="Logo" />
        <motion.img
          onClick={onOpen}
          whileHover={animation.hover}
          src={bars}
          className="absolute max-sm:right-10 max-sm:top-10 right-14 top-16 cursor-pointer"
        />
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="full" placement="top" closeButton={<CloseMenu onOpenChange={onOpenChange} />}>
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerBody>
                  <Menu onClose={onClose} />
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </header>
      {location.pathname === "/" && <section className="w-[100vw] h-[100vh] bg-black"></section>}
      <Outlet />
    </>
  );
});

export default Header;
