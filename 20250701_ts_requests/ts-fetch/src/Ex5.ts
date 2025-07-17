// Exercise 5: Install & Import Axios
// - Set up Axios

import axios from 'axios'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
async function getPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

getPosts().then(posts => {
  posts.forEach(post => console.log(post.id));
});

export default getPosts
