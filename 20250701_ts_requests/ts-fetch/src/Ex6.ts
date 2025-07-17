// Excercise 6
// - Fetch user data using typed Axios call
// - Render names in a list

// Excercise 7
// - Send a typed POST request

import axios from 'axios'

type geo = {
    lat: string;
    lon: string;
}

type address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: geo;
}

type company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address?: address;
  phone?: string;
  website?: string;
  company?: company;
}

interface NewUser {
  name: string;
  email: string;
  address?: address;
  phone?: string;
  website?: string;
  company?: company;
}

// Excercise 6
// - Fetch user data using typed Axios call
// - Render names in a list

async function getUsers(): Promise<User[]> {
  const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return response.data;
}

const userList = getUsers().then(users => {
   return users.map((user) => user.name);
});



//===============================================================//

// Excercise 7
// - Send a typed POST request

async function createUser(user: NewUser): Promise<User> {
  const response = await axios.post<User>(
    'https://jsonplaceholder.typicode.com/users',
    user
  );
  return response.data;
}

function exercise7() {
  createUser({name: "Ben Fake", email: "user@fake.abc"}).then(user => console.log("Created:", user.id));
}

export {userList, exercise7}