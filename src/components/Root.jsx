import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Root() {
  return (
    <main className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Root;
