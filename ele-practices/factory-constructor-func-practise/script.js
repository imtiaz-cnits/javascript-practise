// Creating Object using Factory Function and Constructor Function

const homeAddress1 = homeAddress("Abdul Hamid Rd", "Pabna", "6600");
const homeAddress2 = homeAddress("Bazar Road", "Jessore", "9000");

// Using Factory Function
function homeAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

console.log(homeAddress1);
console.log(homeAddress2);

// Using Constructor Function
const homeAddress3 = new HomeAddress("Banglabazar", "Pabna", "6700");

function HomeAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

console.log(homeAddress3);
