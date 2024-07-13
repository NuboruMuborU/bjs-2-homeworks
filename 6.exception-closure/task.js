// function parseCount(parse) {
//     try {
//         if (isNaN(Number.parseFloat(parse))) {
//             throw new Error("Невалидное значение").message;
//         }
//         return Number.parseFloat(parse);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// function validateCount(parse) {
//     try {
//         return parseFloat(parse);
//     } catch (error) {
//         console.log(error);
//     }
// }


function parseCount(parse) {
    try {
        if (isNaN(Number.parseFloat(parse))) {
            throw new Error("Невалидное значение");
        }
        return Number.parseFloat(parse);
    } catch (error) {
        console.log(error);
    }
}

function validateCount(parse) {
    try {
        return parseFloat(parse);
    } catch (error) {
        console.log(error);
    }
}