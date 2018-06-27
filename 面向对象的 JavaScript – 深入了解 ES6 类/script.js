class SimpleDate {
    constructor (year, month, day) {
        this._year = year
        this._month = month
        this._day = day
    }

    addDays(nDays) {
        this._day += nDays
    }

    getDay(){
        return this._day
    }
}

let today = new SimpleDate(2000, 2, 28)

today.addDays(1)

console.log(today.getDay());