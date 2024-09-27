import "./App.css";
import { useEffect } from "react";

import Header from "./Header";
import MainBody from "./MainBody";
import Archive from "./Archive";
import Footer from "./Footer";
import { PostProvider } from "./PostContext";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  return (
    // 2) PROVIDE VALUE TO CHILD COMPONENT
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <PostProvider>
        <Header />
        <MainBody />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
