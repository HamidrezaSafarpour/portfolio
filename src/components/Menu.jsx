import MenuNav from "./MenuNav";
import MenuContact from "./MenuContact";

function Menu({ onClose }) {
  return (
    <section className="w-[100%] h-[100%] flex justify-center items-center">
      <main className="flex flex-col lg:flex-row justify-between gap-10">
        <MenuNav onClose={onClose} />
        <MenuContact />
      </main>
    </section>
  );
}

export default Menu;
