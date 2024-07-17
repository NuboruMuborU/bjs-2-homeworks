function parseCount(parse) {
    let value = Number.parseFloat(parse);
    if(isNaN(value)) {
    throw new Error("Невалидное значение");
    }
    return value;
    }
    
    function validateCount(parse) {
    try {
    if (isNaN(parseCount(parse))) {
    throw new Error("Невалидное значение");
    }
    return parseCount(parse);
    } catch (error) {
    return error;
    }
    }
    
    
    class Triangle {
    constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    
    if (!(a + b > c) || !(a + c > b) || !(b + c > a)) {
    throw new Error("Треугольник с такими сторонами не существует");
    }
    }
    
    get perimeter() {
    let p = this.a + this.b + this.c;
    return Number(p);
    }
    
    get area() {
    let p = this.perimeter / 2;
    let s = ((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5);
    return Number(s.toFixed(3));
    }
    
    }
    
    function getTriangle(a, b, c) {
    if(!(a + b > c) || !(a + c > b) || !(b + c > a)) {
    return {
    a: a,
    b: b,
    c: c,
    
    get area() {
    return "Ошибка! Треугольник не существует";
    },
    
    get perimeter() {
    return "Ошибка! Треугольник не существует";
    }
    }
    } else { 
    return new Triangle(a, b, c);
    }
    }