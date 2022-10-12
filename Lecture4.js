//Javascript objects
// Objects are variables too. But objects can contain many values.

// This code assigns many values (Fiat, 500, white) to a variable named car:
const car = { type: "Fiat", model: "500", color: "white" };
// The values are written as name:value pairs (name and value separated by a colon).

// It is a commo
//Accessing Object Properties
// objectName.propertyName;
console.log(car.type)



// Object Methods
// Objects can also have methods.
// Methods are actions that can be performed on objects.

// Methods are stored in properties as function definitions.
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};