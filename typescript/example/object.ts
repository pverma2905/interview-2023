// let person: { name: string; age: number; email: string } = {
//   name: "anil",
//   age: 27,
//   email: "abc@gmail.com",
// };

// console.warn(person.name);

// let user: { name: string; age: number; email: string } = {
//   name: "anil",
//   age: 27,
//   email: "abc#gmail.com",
// };

// console.warn(user.name);

type ObjType = { name: string; age: number; email: string };

let person: ObjType = {
  name: "anil",
  age: 27,
  email: "abc@gmail.com",
};

console.warn(person.name);

let user: ObjType = {
  name: "anil",
  age: 27,
  email: "abc#gmail.com",
};

console.warn(user.name);
