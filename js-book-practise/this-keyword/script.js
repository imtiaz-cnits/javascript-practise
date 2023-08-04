const myObject = {
  name: "Mahad",
  age: 6,
  anotherObj: {
    name: "Fahad",
    value: function () {
      console.log(this);
    },
  },
};

myObject.anotherObj.value();

// Get parent object with call method

const myObject1 = {
  name: "Mahad",
  age: 6,
  anotherObj: {
    name: "Fahad",
    value: function () {
      console.log(this);
    },
  },
};

myObject1.anotherObj.value.call(myObject1);

// call method

var karim = {
  name: "Karim Rahman",
  dob: 1996,
  age: function (currentYear, msg, vut) {
    console.log(
      this.name + " is " + (currentYear - this.dob) + " years old!" + msg + vut
    );
  },
};

var rahim = {
  name: "Rahim Khan",
  dob: 1986,
};

var vut = " Vut Nache";

karim.age(2023, " Hello Rahat", vut);
karim.age.apply(rahim, [2023, " Hello Rahat", vut]);

// Bind() method
var bindFunc = karim.age.bind(rahim);
bindFunc(2023, " Hello Rahat tomar piche", vut);
bindFunc(2025, " Hello Mahad tomar piche", vut);
