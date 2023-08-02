// Asynchronous Programming

console.log("Before");

setTimeout(function () {
  console.log("Message will load after 3 seconds");
}, 3000);

function fetchUser() {
  setTimeout(function () {
    console.log("Message will load after 3 seconds");
    return {
      name: "Imtiaz",
      age: 26,
    };
  }, 3000);
}

const user = fetchUser();
console.log(user);

console.log("After");
