let SimpleDate = (function () {

  let _yearKey = new WeakMap()
  let _monthKey = new WeakMap()
  let _dayKey = new WeakMap()

  class SimpleDate {
      constructor(year, month, day) {
          
        _yearKey.set(this, year)
        _monthKey.set(this, month)
        _dayKey.set(this, day)
      }

      addDays(nDays) {
          // _dayKey.set(this, this.getDay()+1)
          _dayKey.set(this, this.getDay()+1)
      }

      getDay() {
          return _dayKey.get(this)
      }
  }

  return SimpleDate
}())