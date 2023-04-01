// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

console.log(
  "Hey! This is my Array Cardio day 1\nTo see my different implementations, type:\n\none() - For my filter Implementation\ntwo() - For my map Implementation\nthree() - For my sort Implementation\nfour() - For my reduce Implementation\nfive() - For another sort Implementation\nsix() - For my sort Implementation\nseven() - For my sort Exercise\neight() - For my reduce Exercize"
);

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function one() {
  console.log("This function shows only inventors born in the 1500s");
  const fifteen = inventors.filter(function (inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
      console.log(
        "Name: " +
          inventor.first +
          " " +
          inventor.last +
          "\n" +
          "Year: " +
          inventor.year // Keep it
      );
      console.table(inventor);
    }
  });
}

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
function two() {
  console.log(
    "This function gives the inventors' first and last names together"
  );
  const fullNames = inventors.map((inventor) => {
    console.log(inventor.first + " " + inventor.last);
  });
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

function three() {
  console.log("This function sorts the inventors, Oldest to youngest");
  const ordered = inventors.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    } else {
      return -1;
    }
  });
  console.table(ordered);
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
function four() {
  console.log(
    "This function shows the total number of years all the inventors had lived"
  );
  const totalYears = inventors.reduce((total, inventor) => {
    return (total += inventor.passed - inventor.year);
  }, 0);
  console.log("The total years they've all lived is: " + totalYears);
}

// 5. Sort the inventors by years lived
function five() {
  console.log(
    "This function sorts the inventors by years Lived. Who lived longer?"
  );
  function yearsLived(x) {
    return x.passed - x.year;
  }
  const oldest = inventors.sort(function (a, b) {
    if (yearsLived(a) < yearsLived(b)) {
      return 1;
    } else {
      return -1;
    }
  });
  console.table(oldest);
}

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

function six() {
  console.log(
    "This function creates a list of Boulevards in Paris that contain 'de' anywhere in the name\nNote: Data from wikipedia and only works there so will return an error on an invalid page!"
  );
  const category = document.querySelector(".mw-category");
  const links = Array.from(category.querySelectorAll("a"));
  const de = links
    .map((link) => link.textContent)
    .filter((streetName) => streetName.includes("de"));
}

// 7. sort Exercise
// Sort the people alphabetically by last name

function seven() {
  console.log("This function sorts the people alphabetically by last name")
  const alpha = people.sort(function(a, b) {
    const [aLast, aFirst] = a.split(", ")
    const [bLast, bFirst] = b.split(", ")
    return aLast > bLast ? 1 : -1;
  })
  alpha.forEach((name) => {
    const eazi = name.split(", ")
    console.log(eazi[0] + " " + eazi[1])
  });
}

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];


function eight() {
  console.log("This function sums up the instances of each element in the data array")
  const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {})
  console.log(transportation)
}