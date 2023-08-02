// Factory Function
function user(name, age) {
  const userObject = {
    name,
    age,
    walk: function () {
      console.log("Imtiaz started walking");
    },
  };
  return userObject;
}

const user1 = user("Anika", 26);
const user2 = user("Mahad", 6);

console.log(user1, user2);

(function text() {
  console.log("Hello Rahat");
})();

var controller = (function () {
  var a = {
    name: "Mahad",
    uid: 102,
  };
  return a;
})();

var interface = function () {
  return "Hello " + controller.name;
};

console.log(interface());
