import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

function MainBody({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
export default MainBody;
