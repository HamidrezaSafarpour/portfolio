import { Button, HeroUIProvider } from "@heroui/react";

function App() {
  return (
    <HeroUIProvider>
      <div className="w-44 h-44 bg-[#252525]"></div>
      <Button color="primary">test</Button>
    </HeroUIProvider>
  );
}

export default App;
