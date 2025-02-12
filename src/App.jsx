import { HeroUIProvider } from "@heroui/react";
import Header from "./components/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <HeroUIProvider>
      <Header />
      <Home />
    </HeroUIProvider>
  );
}

export default App;
