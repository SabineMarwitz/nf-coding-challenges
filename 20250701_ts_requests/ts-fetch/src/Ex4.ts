// Exercise 4: Create a New Post with POST Request
// - Send data using fetch

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface NewPost {
  title: string;
  body: string;
  userId: number;
}

async function createPost(post: NewPost): Promise<Post> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });

  const data: Post = await res.json();
  return data;
}

function exercise4(): void {
  createPost({ title: "Hi", body: "This is a post", userId: 1 }).then((post) =>
    console.log("Created Post ID:", post.id)
  );
}

export default exercise4
