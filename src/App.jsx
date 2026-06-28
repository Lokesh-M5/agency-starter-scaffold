import { useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ArcHero from "./components/ArcHero";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {!loading && (
        <>
          <Navbar />
          <ArcHero />
        </>
      )}
    </>
  );
}

export default App;