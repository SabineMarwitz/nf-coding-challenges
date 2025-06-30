type Status = "active" | "inactive" | "pending";

interface Account {
  username: string;
  status: Status;
  lastLogin?: Date;
}

function isActive(account: Account): boolean {
  if ("active" === account.status) {
    return true;
  }
  return false;
}

let john: Account = {
  username: "John",
  status: "active",
};

let sam: Account = {
  username: "Sam",
  status: "pending",
};

let tom: Account = {
  username: "Tom",
  status: "active",
  lastLogin: new Date(2025, 5, 27, 0, 0, 0),
};

console.log(isActive(john));
console.log(isActive(sam));
console.log(isActive(tom));
