const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

console.log(
  "Type %cstart() %cto start...",
  "font-family: 'Courier New';",
  "font-family: monospace;"
);

const main = async () => {
  console.log("Finally got here, I've been waiting forever😪");
  await sleep(2000);
  console.log(
    "Oh wait, I wasn't supposed to say that out loud🤐, let's try again"
  );
  await sleep(2000);
  console.clear();
  console.log(
    "Hey and welcome to to the console, I'm glad you made it here😁 %cfinally",
    "text-decoration: line-through; color: rgba(128, 128, 128, 0.3);"
  );
  await sleep(2000);
  console.log(
    "I'm a %cconsole.log() %cfunction, I'm used to print out stuff to the console",
    "font-family: 'Courier New';",
    "font-family: monospace;"
  );
  await sleep(2000);
  console.log(
    "And today, I'm gonna tell you all about me and my console friends"
  );
  await sleep(2000);
  console.log("So let's get started");
  await sleep(1000);
  console.clear();
  console.log(
    "First of all, I'm a %cconsole.log() %cfunction, I'm used to print out stuff to the console",
    "font-family: 'Courier New';",
    "font-family: monospace;"
  );
  await sleep(1000);
  console.log(
    "The contents to be printed out are written inside my parenthesis. Stuffs written inside my parenthesis are called %carguments",
    "font-family: monospace;"
  );
  await sleep(3000);
  console.log(
    "We'll come back to arguments later, but for now, try to write something inside my parenthesis and see what happens e.g %cconsole.log('Hello World')",
    "font-family: monospace;"
  );
  await sleep(3000);
  console.log(
    "You start with the %cconsole %cobject, then a dot, then the %clog %cmethod, then parenthesis, then inside the parenthesis, you write whatever you want to print out",
    "font-family: 'Courier New';",
    "font-family: monospace;",
    "font-family: 'Courier New';",
    "font-family: monospace;"
  );
  await sleep(1000);
  console.log(
    "So it looks something like this %cconsole.log('Hello World').%cNow, try it out, write in the console👇🏼",
    "font-family: 'Courier New';",
    "font-family: monospace;"
  );
  await sleep(10000);
  console.log("That should've been enough time to try me out");
  await sleep(2000);
  console.log("Now, let's talk about %carguments", "font-family: monospace;");
  await sleep(2000);
  console.log(
    "Arguments are the contents inside my parenthesis, the stuffs that i print out are one. There are also others like styling arguments to further style what is being logged out. they are seperated with commas"
  );
  await sleep(3000);
  console.log(
    "Like this is a %cblue text, %cthis is a red text, %cand %cthis is a purple text. %cGojo Satoru :)",
    "color: blue",
    "color: red;",
    "color: white;",
    "color: purple;",
    "color: rgba(250, 250, 250, 0.05); font-family: 'Courier New';"
  );
  await sleep(2000);
  console.log("Now you know about me, let's go to my friends");
  await sleep(2000);
  console.clear();
  console.log(
    "Type the respective commands for all my friends. psst, the commands are the one with parentheses at their ends"
  );
  console.log(
    "1. Interpolation - enterone()\n2. Warning - entertwo()\n3. Error - enterthree()\n4. Info - enterfour()\n5. Testing - enterfive()\n6. Cleaning - entersix()\n....more coming up soon"
  );
};

function start() {
  console.clear();
  main();
}

const enterone = async () => {
  console.log("knocking...");
  await sleep(2000);
  console.log(
    "Heyaa, I'm Interpolation! I'm used to slot in variables into the console to allow more dynamism."
  );
  await sleep(2000);
  console.log(
    "pretty cool right?😉 I am written like this %cconsole.log('Hello, %s', 'John')",
    "font-family: 'Courier New';",
    "%s"
  );
  await sleep(2000);
  console.log(
    "I promise it's not difficult, you just create another argument and store the value you want to print out in it, then you slot it in with %s",
    "%s"
  );
  await sleep(2000);
  console.log("Then it prints %c'Hello, John'", "font-family: 'Courier New';");
  await sleep(2000);
  console.log("I hope you understood that short lesson, come back soon!");
};

const entertwo = async () => {
  console.log("knocking...");
  await sleep(2000);
  console.log("Y'ello! I'm warning, used to output warnings to the console.");
  await sleep(2000);
  console.log(
    "As you've seen my friend, %cconsole.log is %c used to log stuffs out, but I'm used specifically for %cwarnings",
    "font-family: 'Courier New';",
    "font-family: monospace;",
    "color: yellow; font-weight: bold;"
  );
  await sleep(3000);
  console.log(
    "Here's my syntax: %cconsole.warn('I am a warning') %cand this will print out ...",
    "font-family: 'Courier New';",
    "font-family: monospace;"
  );
  await sleep(1000);
  console.warn("I am a warning");
  await sleep(2000);
  console.log("I hope you understood that short lesson, come back soon!");
};

const enterthree = async () => {
  console.log("knocking...");
  await sleep(2000);
  console.log("Yo, I'm Error! I'm used to output errors to the console.");
  await sleep(2000);
  console.log(
    "As you've seen my friend, %cconsole.log is %c used to log stuffs out, but I'm used specifically for %cerrors",
    "font-family: 'Courier New';",
    "font-family: monospace;",
    "color: red; font-weight: bold;"
  );
  await sleep(3000);
  console.log(
    "Here's my syntax: %cconsole.error('I am an error') %cand this will print out ...",
    "font-family: 'Courier New';",
    "font-family: monospace;"
  );
  await sleep(1000);
  console.error("I am an error");
  await sleep(2000);
  console.log("I hope you understood that short lesson, come back soon!");
};

const enterfour = async () => {
  console.log("knocking...");
  await sleep(2000);
  console.log(
    "Hi, I'm Info! I'm used to output useful information to the console."
  );
  await sleep(2000);
  console.log(
    "To be very honest, I don't have a particular perk that sets me apart from my friend %cconsole.log",
    "font-family: 'Courier New';"
  );
  await sleep(2300);
  console.log(
    "But here's my syntax for knowledge sake: %cconsole.info('I am an info') %cand this will give ...",
    "font-family: 'Courier New';",
    "font-family: monospace;"
  );
  await sleep(2900);
  console.info("I am an info");
  await sleep(2000);
  console.log("I hope you understood that short lesson, come back soon!");
};

const enterfive = async () => {
  console.log("knocking...");
  await sleep(2000);
  console.log("Hmm, seems he's out");
};

const entersix = async () => {
  console.log("knocking...");
  await sleep(2000);
  console.log("Hmm, seems he's out");
};
