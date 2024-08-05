function sayHello(name = "world") {
  return `Hello ${name}`;
}

console.log(sayHello("Tomasz")); // Output: Hello Tomasz
console.log(sayHello()); // Output: Hello world
