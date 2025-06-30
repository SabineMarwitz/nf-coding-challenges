interface User {
  id: number;
  name: string;
  email: string;
}

let user: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

function getUserInfo(user: User): string {
  let info = "";
  info = `User ${user.id}: ${user.name} (${user.email})`;
  return info;
}

console.log(getUserInfo(user));
