class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) this.books.push(book);
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
            return null;
        }
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

   