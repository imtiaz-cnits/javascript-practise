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

// Callback & Callback Hell

fetchUsers(1245, function (user) {
  console.log(user);
  sendMail(user.email, function (response) {
    console.log(response.success);
  });
});

function sendMail(userMail, callback) {
  setTimeout(function () {
    console.log("Message is Sending...");
    const response = { success: true };
    callback(response);
  }, 3000);
}

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

//Promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1);
    reject(new Error("Have some error!"));
  }, 8000);
});

console.log(promise);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Handeling Multiple Promises

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Have an Issue")), 2000);
});

Promise.all([promise1, promise2])
  .then((res1) => console.log(res1))
  .catch((err1) => console.log(err1));

// Fetch Web API

const gitAPI = fetch("https://api.github.com/users/andrew");

gitAPI
  .then((resp) => resp.json())
  .then((profile) => console.log(profile))
  .catch((errors) => console.log(errors));

console.log(gitAPI);

// Fetch API using Async and Await

async function getInfoFromGit() {
  const data = await fetch("https://api.github.com/users/andrew");

  const profiles = await data.json();
  console.log(profiles);
}

getInfoFromGit();
