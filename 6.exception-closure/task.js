function parseCount(parse) {
    let value = Number.parseFloat(parse);
    try {
        if (isNaN(value)) {
            throw new Error("Невалидное значение");
        }
        return value;
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
        let p = ((this.a + this.b + this.c) / 2);
        let s = ((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5);
        return Number(s.toFixed(3));
    }

}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        if (triangle) {
            return triangle;
        }
        throw new Error("Ошибка! Треугольник не существует");
    } catch (error) {
        console.log(error);
    }
}