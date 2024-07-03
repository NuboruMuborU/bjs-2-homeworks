class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        if(this.state <= 0) return;
        this.state *= 1.5;
        if(this.state > 100) {
            this.state = 100;
        }
    }

    set setState(num) {
        if(num < 0) this.state = 0;
        else if(num > 100) this.state = 100;
        else this.state = num;
    }

    get getState() {
        return this.state;
    }
}

class Magazine extends PrintEditionItem {
    constructor() {
        super(state, type);
        this.type = "magazine";
    }
    
}

   class Book extends PrintEditionItem {
    constructor() {
        super().getState();
        this.type = "book";
    }
    
}

   class NovelBook extends Book {
    constructor() {
        super().getState();
        this.type = "novel";
    }
    
}

   class FantasticBook extends Book {
    constructor() {
        super().getState();
        this.type = "fantastic";
    }
    
}

   class DetectiveBook extends Book {
    constructor() {
        super().getState();
        this.type = "detective";
    }
    
}
