import { Link } from "react-router-dom";

function MenuNav({ onClose }) {
  return (
    <main className="flex mt-10 gap-2 lg:pr-10 h-[50%] justify-center items-center">
      <p className="-rotate-90 w-fit h-fit mt-5 lg:mt-6 font-bold self-start">MENU</p>
      <nav className="flex flex-col max-[400px]:text-4xl text-5xl lg:text-6xl list-none font-semibold text-black gap-4 lg:self-end">
        <Link to="" onClick={onClose}>
          HOME
        </Link>
        <Link to="projects" onClick={onClose}>
          PROJECTS
        </Link>
        <Link to="about" onClick={onClose}>
          ABOUT
        </Link>
        <Link to="contact" onClick={onClose}>
          CONTACT
        </Link>
      </nav>
    </main>
  );
}

export default MenuNav;
