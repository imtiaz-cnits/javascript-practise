// Asynchronous Programming

console.log("Before");

setTimeout(function () {
  console.log("Message will load after 3 seconds");
}, 2000);

function fetchUser() {
  setTimeout(function () {
    console.log("Message will load after 3 seconds");
    return {
      name: "Imtiaz",
      age: 26,
    };
  }, 2000);
}

const user = fetchUser();
console.log(user);

console.log("After");

// Callback Function

fetchUsers(1245, function (user) {
  console.log(user);
});

function fetchUsers(userId, callback) {
  setTimeout(function () {
    console.log("Imtiaz is Web Developer");
    const fetchedUser = {
      id: userId,
      name: "Imtiaz",
      email: "imtiaz@gmail.com",
    };
    callback(fetchedUser);
  }, 2000);
}
