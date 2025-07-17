// Exercise 1: Fetch & Log Posts
// - Make a GET request and log the data

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


fetchPosts().then((posts) => {
    posts.forEach((post) => console.log(post.title));
  });


export default fetchPosts
