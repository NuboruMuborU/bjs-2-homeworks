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
            if(type == "name") {
                if(value === this.books[index].name) return this.books[index];
            }
            if(type == "releaseDate") {
                if(value === this.books[index].releaseDate) return this.books[index];
            }
            if(type == "author") {
                if(value === this.books[index].author) return this.books[index];
            }
            if(type == "type") {
                if(value === this.books[index].type) return this.books[index];
            }
            if(type == "pagesCount") {
                if(value === this.books[index].pagesCount) return this.books[index];
            }
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
        this._state = 100;
        this.type = null;
    }

    fix() {
        this._state = this._state*1.5;
    }

    set state(num) {
        if(num >= 100){ 
            this._state = 100;
            return
        };
        if(num < 0) {
            this._state = 0;
            return;
        }
        this._state = num;
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


   