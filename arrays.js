console.log('Part 1: Objects');
//new object
const person = {
    name: 'Donny',
    age: 28
};

//dot notation
person.name = 'Donny';
person.age = 28;

//bracket notation
person['name'] = 'John';
person['age'] = 45;

//logging person
console.log(person);

//logging person name
console.log(person.name);

//logging person age
console.log(person.age);

//new key value
person.evaluations = [7,10,9];
console.log(person.evaluations);

//Part 2: Arrays
console.log('Part 2: Arrays');
let selectedColors = ['green','blue','red'];

//adding 4th element
selectedColors.push('yellow');

//adding a digit 
selectedColors.push(5);

//adding an object
selectedColors.push({greeting: "hi, I am an object"});
/*discommenting to log only the greeting

// logging the new array
console.log(selectedColors);



//logging the lenght of array
console.log(selectedColors.length);

//logging first element
console.log(selectedColors[0]);
*/

//logging last element without unknown amount
console.log(selectedColors.slice(-1));

//Part 3: A "real-life" object
console.log('Part 3: A "real-life" object');

//copying the code from winc academy
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {favourite_food: "fish",
    medium_liked_food: "dried fruits", 
    disliked_food: "walnuts"
    }},
    {name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {favourite_food: "tuna",
    medium_liked_food: "canned food", 
    disliked_food: "all fruits"
    }},
    {name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {favourite_food: "meaty things",
    medium_liked_food: "tuna", 
    disliked_food: "canned food"
    }}
    ]

    //the name of the last cat breed
    console.log("Name cat breed 3:", catBreeds[2].name);

    //the energy level of the first cat breed
    console.log("Energy level cat breed 1:", catBreeds[0].energy_level);

    //the first temperament of the temperaments of the second cat breed
    console.log("First temperament cat breed 2:", catBreeds[1].temperament[0]);

    //the last temperament of the temperaments of the third cat breed
    console.log("Last temperament cat breed 3:", catBreeds[2].temperament[4]);

    //the favorite food of the third cat breed
    console.log("Favorite food cat breed 3:", catBreeds[2].food.favourite_food);