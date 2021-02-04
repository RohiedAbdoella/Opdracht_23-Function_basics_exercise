//Deel 1: Objecten:
let person = {
   name: 'Rohied',
   age: 39,
   evaluations: [7, 10, 9]
};




/*
Testdata

console.log(person);
console.log(person.age);
console.log(person.name);

//Dot Notation
person.name = 'Vikash';

//Bracket Notation
let nameChange = 'name';
person[nameChange] = 'Vikash';

//waarde is 7, 10, 9
console.log(person.evaluations);
*/

/*
WINC oplossing voor dot.notation en bracket.notation?
console.log(person["name"]);
console.log(person["age"]);
*/


//Deel 2: Arrays:
const colors = ['groen', 'blauw', 'rood'];

// expected output: deze value's komen erbij.
colors.push('geel', 5, {greeting: "hi ik ben een object"})

/*
Testdata

console.log(colors);

// waarde is 3
console.log(colors.length);

// alleen groen
console.log(colors[0]);

// laatste element
console.log(colors[colors.length -1]);
*/

/*
WINC OPLOSSING:
//voor push methode?
console.log(myArray);
myArray.push(5);
console.log(myArray);
myArray.push({ greeting: "Hi ik ben een object" });
console.log(myArray);
console.log(myArray[myArray.length - 1].greeting);
*/



//Deel 3: Bekijk een "real-life" object:
const catBreeds = [{
   name: "Abyssinian",
   description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
   dog_friendly: 4,
   energy_level: 5,
   life_span: "14 - 15",
   origin: "Egypt",
   temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
   wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
               food: {
                       favourite_food: "fish",
     medium_liked_food: "dried fruits", 
     disliked_food: "walnuts"
    }
 },
       {
   name: "Aegean",
   description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
   dog_friendly: 4,
   energy_level: 53,
   life_span: "9- 12",
   origin: "Greece",
   temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
   wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
   food: {
                       favourite_food: "tuna",
     medium_liked_food: "canned food", 
     disliked_food: "all fruits"
    }
 },
       {
   name: "American Bobtail",
   description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
   dog_friendly: 5,
   energy_level: 3,
   life_span: "11 - 15",
   origin: "United States",
   temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
   wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
   food: {
                       favourite_food: "meaty things",
     medium_liked_food: "tuna", 
     disliked_food: "canned food"
    }
 }
]

/*
Testdata

1e//expected output: American Bobtail
console.log("Naam kat 3:", catBreeds[2].name);

2e//expected output: 5
console.log("Energy levels kat 1:", catBreeds[0].energy_level);

3e//expected output: Eerste temperament van de temperamenten van de 2e kat
console.log("Eerste temperament kat 2:", catBreeds[1].temperament[0]);

4e//expected output: Laatste temperament van de temperamenten van de 3e kat
console.log("Laatste temperament kat 3:", catBreeds[2].catBreeds.temperament[-1]);

5e//expected output: Favoriete voedsel van 3e kat: meaty things
console.log("Favo voedsel kat 3:", catBreeds[2].food.favorite_food);
*/

/*
WINC OPLOSSING:
1e v
2e v
3e v

4e oplossing:
const lengthTemperamentsCatThree = catBreeds[2].temperament.length;
console.log(
  "Laatste temperament kat 3:",
  catBreeds[2].temperament[lengthTemperamentsCatThree - 1]
);

5e v
*/

