class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state = 100;
        this.type = type = null;
    }

    fix() {
        this.state *= 15;
    }

    set setState(num) {
        if(num > 0) this.state = 0;
        else if(num > 100) this.state = 100;
        else this.state = num;
    }

    get getState() {
        return this.state;
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100