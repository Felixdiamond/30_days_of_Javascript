// ## Array Cardio Day 2

let ageLimit = 19;
let minYear = 1990;
let maxYear = new Date().getFullYear();

const generateRandomId = (length) => {
  length -= 2;
  let randomId = Math.floor(Math.random() * 10).toString();
  for (let i = 0; i <= length; i++) {
    randomId += Math.floor(Math.random() * 10).toString();
  }
  return parseInt(randomId);
}

const generateRandomIdYr = () => {
  let min = minYear;
  let max = maxYear;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const people = [
    { name: 'Wes', year: generateRandomIdYr(4), occupation: 'Developer' },
    { name: 'Kait', year: generateRandomIdYr(4), occupation: 'Designer' },
    { name: 'Irv', year: generateRandomIdYr(4), occupation: 'Artist' },
    { name: 'Lux', year: generateRandomIdYr(4), occupation: 'Musician' }
];

const comments = [
    { text: 'Love this!', id: generateRandomId(6) },
    { text: 'Super good', id: generateRandomId(6) },
    { text: 'You are the best', id: generateRandomId(6) },
    { text: 'Ramen is my fav food ever', id: generateRandomId(6) },
    { text: 'Nice Nice Nice!', id: generateRandomId(6) }
];

// Display instructions for the user
console.log('Welcome to Array Cardio Day 2!');
console.log('This code generates random people and comments and allows you to interact with them.');
console.log('You can use the following commands in the console to interact with the code:');
console.log('- showPeople(): displays the current list of people');
console.log('- showComments(): displays the current list of comments');
console.log('- addPerson(): prompts you to add a new person');
console.log('- removePerson(): prompts you to remove a person by name');
console.log('- addComment(): prompts you to add a new comment');
console.log('- removeComment(): prompts you to remove a comment by ID');

// Define functions to interact with the code
const showPeople = () => {
    console.table(people);
}

const showComments = () => {
    console.table(comments);
}

const addPerson = () => {
    let name = prompt('Enter the name of the person: ');
    let year = prompt('Enter the year of birth of the person: ');
    let occupation = prompt('Enter the occupation of the person: ');
    people.push({name, year, occupation});
    console.log('Person added!');
}

const removePerson = () => {
    let name = prompt('Enter the name of the person to remove: ');
    let index = people.findIndex(person => person.name === name);
    if (index !== -1) {
        people.splice(index, 1);
        console.log('Person removed!');
    } else {
        console.log('Person not found!');
    }
}

const addComment = () => {
    let text = prompt('Enter the text of the comment: ');
    let id = generateRandomId(6);
    comments.push({text, id});
    console.log('Comment added!');
}

const removeComment = () => {
    let id = prompt('Enter the ID of the comment to remove: ');
    let index = comments.findIndex(comment => comment.id == id);
    if (index !== -1) {
        comments.splice(index, 1);
        console.log('Comment removed!');
    } else {
        console.log('Comment not found!');
    }
}
