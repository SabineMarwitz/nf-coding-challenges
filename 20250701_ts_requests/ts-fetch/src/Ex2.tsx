// Exercise 2: Display Posts in the DOM
// - Render post titles in a list

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");

  const data: Post[] = await res.json();
  return data;
}


const myList =fetchPosts().then((posts) => {
  return posts.map((post) => <li key={post.id}>{post.title}</li>);
});


function Exercise2() {
  return (
    <>
      <ul id="postList">{myList}</ul>
    </>
  );
}

export default Exercise2
