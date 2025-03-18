import close from "../assets/close.png";

function CloseMenu({ onOpenChange }) {
  return (
    <div onClick={onOpenChange} className="cursor-pointer absolute max-sm:right-10 max-sm:top-10 top-14 right-16 z-10">
      <img src={close} />
    </div>
  );
}

export default CloseMenu;
