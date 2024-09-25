import "./App.css";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import Header from "./Header";
import MainBody from "./MainBody";
import Archive from "./Archive";
import Footer from "./Footer";

const createRandomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};

function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const handleAddPost = (post) => {
    setPosts((posts) => [post, ...posts]);
  };

  const handleClearPosts = () => {
    setPosts([]);
  };

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <Header
        posts={searchedPosts}
        onClearPosts={handleClearPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <MainBody posts={searchedPosts} onAddPost={handleAddPost} />
      <Archive onAddPost={handleAddPost} />
      <Footer />
    </section>
  );
}

export default App;
