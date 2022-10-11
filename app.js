const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);

const [name, github] = profileDataArgs;


fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Checkout index.html to see the output!');
});






// EXAMPLES FROM LESSON 9.1

// function that takes input and displays output
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//     }

//     console.log('================')

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);