// Objects 

const bicycle = {
  color: "blue",
  electric: false,
  start() {
    console.log("You begin to pedal the bike.")
  }
};

console.log(bicycle);
console.log(bicycle.color);
console.log(bicycle.start);
console.log(bicycle.start());
bicycle.color = "red";
console.log(bicycle);
console.log(bicycle.color = "green");
console.log(bicycle.start = function() {
  console.log("You start the engine on your bike.")
}
);

bicycle.start = () => console.log("You startttttt the engine on your bike.")

console.log(bicycle.start());

let hello = (name) => ({studentName: name});
console.log(hello("Madelyn"));

//classes in JS

class MyClass {
  constructor() {
    //...
  }
  method1() {
    //...
  }
  method2() {
    //...
  }
  method3() {
    //...
  }
}

class User {
  constructor(userName, firstName, lastName, location, createdOnDate) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.createdOnDate = createdOnDate;
  }
}

let Madelyn1 = new User(
  "SampleStudentUser",
  "Madelyn",
  "Bonzi",
  "NuCamp", 
  "11/06/2021"
)

console.log(Madelyn1);

class AdminUser extends User {
  constructor(userName, firstName, lastName, location) {
    super(userName, firstName, lastName, location)
  }
  adminTask() {
    console.log(`The admin's name is: ${this.userName}`)
  }
}

const newUser = new AdminUser ("The one", "Mada", "Bonzi", "secret location"); 

console.log(newUser);
newUser.adminTask();
