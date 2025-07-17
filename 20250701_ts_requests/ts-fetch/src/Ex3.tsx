// Exercise 3: Handle Errors Gracefully
// - Add error handling using try/catch

interface APIError {
  message: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function safeFetch(): Promise<Post[] | APIError> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      return { message: "Network error" };
    }
    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    return { message: (error as Error).message };
  }
}

export default function exercise3() {
  const result = safeFetch();
  //console.log(result);
  console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
}
