import Test from "./Test";

function List({ posts }) {
  return (
    <div className="main">
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {/* <Test /> */}
    </div>
  );
}
export default List;
