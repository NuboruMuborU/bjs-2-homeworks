class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        if(this.state == 0) return;
        this.state = this.state*1.5;
        if(this.state > 100) this.state = 100;
    }

    setState(num) {
        if(num >= 100){ 
            this.state = 100;
            return
        };
        if(num < 0) {
            this.state = 0;
            return;
        }
        this.state = num;
    }

    getState() {
        return this.state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount);
            super.getState();
            this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        super.getState();
        this.type = "book";
        this.author = author;
    }
}

 class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        super.getState();
        this.type = "novel";
        this.author = author;
    }

}

 class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        super.getState();
        this.type = "fantastic";
        this.author = author;
    }

}

 class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        super.getState();
        this.type = "detective";
        this.author = author;
    }
}

   