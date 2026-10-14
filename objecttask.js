
let my_arr = [
    23,
    "Jane",
    560,
    ["Lesson", "Maths", { currency: "KES", amount: 90 }],
    987,
    76,
    "John"
];

// 1. Display KES
console.log(my_arr[3][2].currency);

// 2. Display 560
console.log(my_arr[2]);

// 3. Display Maths
console.log(my_arr[3][1]);

// 4. Display amount 90
console.log(my_arr[3][2].amount);

// 5. Reverse 987 to 789 without an inbuilt method
my_arr[4] = Number(String(my_arr[4]).split('').reverse().join(''))

console.log(my_arr[4])//789

console.log(my_arr)

// 6. Change John to Jane
my_arr[6] = "Jane";

console.log(my_arr);



//In the structure below, output: "PostgreSQL" and "Deploy to Netlify"

//const userProfile = { id: 101, name: { first: "Brian", last: "Letting", }, contact: { email: "jeff@example.com", phones: ["+254700000001", "+254700000002"], }, address: { current: { city: "Nairobi", street: "Westlands Ave", postalCode: "00100", }, previous: [ { city: "Eldoret", street: "Main Street", postalCode: "30100", }, { city: "Kisumu", street: "Lake View Road", postalCode: "40100", }, ], }, preferences: { theme: "dark", language: "en", notifications: { email: true, sms: false, push: ["promotions", "updates"], }, }, projects: [ { id: 1, name: "POS System", technologies: ["React", "FastAPI", "PostgreSQL"], tasks: [ { title: "Set up DB", done: true }, { title: "Design UI", done: false }, ], }, { id: 2, name: "Portfolio Website", technologies: ["HTML", "CSS", "JavaScript"], tasks: [ { title: "Create About Page", done: true }, { title: "Deploy to Netlify", done: false }, ], }, ], };

const userProfile = {
    id: 101,
    name: {
        first: "Brian",
        last: "Letting",
    },
    contact: {
        email: "jeff@example.com",
        phones: ["+254700000001", "+254700000002"],
    },
    address: {
        current: {
            city: "Nairobi",
            street: "Westlands Ave",
            postalCode: "00100",
        },
        previous: [
            { city: "Eldoret", street: "Main Street", postalCode: "30100" },
            { city: "Kisumu", street: "Lake View Road", postalCode: "40100" },
        ],
    },
    preferences: {
        theme: "dark",
        language: "en",
        notifications: {
            email: true,
            sms: false,
            push: ["promotions", "updates"],
        },
    },
    projects: [
        {
            id: 1,
            name: "POS System",
            technologies: ["React", "FastAPI", "PostgreSQL"],
            tasks: [
                { title: "Set up DB", done: true },
                { title: "Design UI", done: false },
            ],
        },
        {
            id: 2,
            name: "Portfolio Website",
            technologies: ["HTML", "CSS", "JavaScript"],
            tasks: [
                { title: "Create About Page", done: true },
                { title: "Deploy to Netlify", done: false },
            ],
        },
    ],
};

console.log(userProfile.projects[0].technologies[2]);

console.log(userProfile.projects[1].tasks[1].title);

//Remove a middle character: Given "planet", produce "planet" without the third character, resulting in "planet" with the a removed: "plnet".

let word = "planet"

console.log(word.replace("a",""))

//Compare fractions: Given a = 3, b = 7, c = 4, d = 9, determine which fraction is larger without dividing the fractions.

let a = 3;
let b = 7;
let c = 4;
let d = 9;

if (a * d > c * b) {
    console.log(`${a}/${b} is larger`);
} else if (a * d < c * b) {
    console.log(`${c}/${d} is larger`);
} else {
    console.log(`${a}/${b} and ${c}/${d} are equal`);
}


//Insert a character: Given "helloworld", produce "hello-world" by inserting a hyphen

let str = "helloworld".replace("world", "-world");

console.log(str); // hello-world
//Discount calculator: A customer gets a 5% discount for spending at least 1,000 and a 15% discount for spending at least 5,000. Calculate the final price.

function calculateFinalPrice(amount) {
  if (amount >= 5000) return amount * 0.85;
  if (amount >= 1000) return amount * 0.95;
  return amount;
}

console.log(calculateFinalPrice(5500)); 


//Electricity billing: Calculate a bill using these rates: the first 100 units cost 5 per unit, the next 100 cost 8 per unit, and units above 200 cost 12 per unit.

