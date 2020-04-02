// Activity 1 - 2 Objects & 2 Object Constructors

let celebrity = {
    name: "Selena",
    gender: "female",
    occupation: "singer",
    birthplace: "Texas",
    birthYear: 1971,
    isAlive: false
};

let character = {
    name: "Ada Wong",
    gender: "female",
    isFictional: true,
    nameOfSeries: "Resident Evil",
    yearFirstAppearance: 1998,
};
console.log(character);

function Person(name, gender, isReal, isAnimated, age) {
    this.name = name;
    this.gender = gender;
    this.isAnimated = isAnimated;
    this.age = age;
};

let blackPanther = new Person("Black Panther", "male", false, 35);
let garnet = new Person("Garnet", "female", true, 33);
console.log(blackPanther, garnet);

// Activity 2 - Create & Initialize Methods

function person(firstName, lastName, greeting) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.greeting = greeting;
    this.sayGreeting = function() {
        console.log(this.greeting)
    };
}

blackPanther = new person("Black", "Panther", "Wakanda forever!");
let selena = new person("Selena", "Quintanilla-Pérez", "I could fall in love with you");

blackPanther.sayGreeting();
selena.sayGreeting();

// Activity 3 - Loop to Show the Names

let characterNames = ["Selena", "Garnet", "Black Panther", "Ada Wong"];
let text = "";
for (i = 0; i < characterNames.length; i++) {
    text += characterNames[i] + "\n";
}
console.log(text);
