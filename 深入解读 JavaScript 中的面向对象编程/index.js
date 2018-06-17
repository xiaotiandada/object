'use strict'

class Person {
    constructor (name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }
    sayName () {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor (name, age, scholl) {
        super(name, age, scholl)
        this.scholl = scholl
    }

    sayScholl () {
        console.log(this.scholl)
    }
}

var stu1 = new Student('weiwei', 20, 'one')
var stu2 = new Student('lily',22,'two')

stu1.sayName()
stu1.sayScholl()

stu2.sayName()
stu2.sayScholl()