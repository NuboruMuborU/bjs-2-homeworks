class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book._state > 30) this.books.push(book);
    }

    findBookBy(type, value) {
        for (let index = 0; index < this.books.length; index++) {
            if(this.books[index][type] === value) return this.books[index];
        }
        return null;
    }

    giveBookByName(bookName) {
        let book = null;
        for(let index = 0; index < this.books.length; index++) {
            if(this.books[index].name === bookName) {
                book = this.books[index];
                this.books.splice(index, 1);
                break;
            }
        }
        return book;
    }

}

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state*1.5;
        if(this.state > 100) this.state = 100;
    }

    set state(num) {
        let _state = this.state;
        if(num >= 100){ 
            this.state = 100;
            return
        };
        if(num < 0) {
            this.state = 0;
            return;
        }
        this.state = _state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount);
            this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

 class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "novel";
        this.author = author;
    }

}

 class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "fantastic";
        this.author = author;
    }

}

 class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "detective";
        this.author = author;
    }
}


   