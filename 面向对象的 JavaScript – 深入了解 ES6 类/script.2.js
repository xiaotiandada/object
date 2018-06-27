let SimpleDate = (function () {

    let _yearKey = Symbol()
    let _monthKey = Symbol()
    let _dayKey = Symbol()

    class SimpleDate {
        constructor(year, month, day) {
            this[_yearKey] = year
            this[_monthKey] = month
            this[_dayKey] = day
        }

        addDays(nDays) {
            this._day += nDays
        }

        getDay() {
            return this._day
        }
    }

    return SimpleDate
}())