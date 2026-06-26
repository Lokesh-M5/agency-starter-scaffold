import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import ImageReveal from "./components/ImageReveal";

import useLenis from "./hooks/useLenis";
import useScrollAnimations from "./hooks/useScrollAnimations";

function App() {

  useLenis();
  useScrollAnimations();

  return (
    <>
      <Loader />
      <Cursor />

      <Navbar />

      <Hero />

      <ImageReveal />

    </>
  );
}

export default App;