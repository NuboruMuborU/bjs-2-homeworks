function compareArrays(arr1, arr2) {
    if(arr1.length != arr2.length) return false;
    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    if(users.length < 1) return 0;
    
    if(gender === "мужской" || gender === "женский") {
        let ages = users
        .filter(users => users.gender === gender)
        .map(users => users.age);

        let agesSum = ages.reduce((acc, item) => {
            let sum = acc + item;
            return sum;
        });

        return agesSum / ages.length;
    }
    return 0;
}