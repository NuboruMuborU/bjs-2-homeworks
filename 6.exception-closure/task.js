function parseCount(parseUnit) {
    try {
        if (isNaN(parseUnit) || parseUnit === " ") {
            throw new Error("Невалидное значение");
        } else {
            return Number.parseFloat(parseUnit);
        }
    } catch (error) {
        console.log(error);
    }
}

function validateCount(validateUnit) {
    try {
        parseCount(validateUnit);
    } catch (error) {
        console.log(error);
    }
}