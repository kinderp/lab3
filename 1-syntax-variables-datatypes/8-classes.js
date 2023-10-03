class CalendarDay {
    // private fields
    #month;
    #day;
    #year;
    // constructor
    constructor(month, day, year) {
        this.month = month;
        this.day = day;
        this.year = year;
    }
    // public methods
    toString() {
        return `${this.year}-${this.month}-${this.day}`;
    }
}

// Using our Calendar class
let day1 = new CalendarDay(1, 1, 2023);
console.log(day1.toString());