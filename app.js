const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// function that takes input and displays output
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
    }

    console.log('================')

    profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);