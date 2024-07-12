function parseCount(parse){
    try {
        let value = Number.parseFloat(parse);
        if(isNaN(value)){
            throw new Error('Невалидное значение');
        } else{
            return value;
        }
    } catch (error) {
        console.log(error);
    }
}