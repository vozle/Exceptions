//#1

function parseCount(number) {
    const parse = Number.parseInt(number);
    if (isNaN(parse)) {
        throw new Error("Невалидное значение");
    } else {
        return parse;
    }
}

function validateCount(number) {
    try {
        return parseCount(number)
    } catch (Error) {
        return Error;
    }
}

//#2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let halfPer = this.getPerimeter() / 2;
        let s = Math.sqrt(halfPer * (halfPer - this.a) * (halfPer - this.b) * (halfPer - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getPerimeter() { return 'Ошибка! Треугольник не существует' },
            getArea() { return 'Ошибка! Треугольник не существует' }
        }
    }
}