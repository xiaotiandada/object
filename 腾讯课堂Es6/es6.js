const Person = (function(){
    const KEY_name = Symbol('_name')
    const KEY_sayhello = Symbol('_say')
    class Person {
        constructor(name) {
            this[KEY_name] = name
        }
        set name(name) {
            this[KEY_name] = name
        }

        get name(){
            return this[KEY_name]
        }
        showName(){
            this[KEY_sayhello]()
        }
        [KEY_sayhello](){
            console.log(this[KEY_sayhello])
        }
    }
    return Person
})()


let p = new Person('es6')
p.name = 'es2015'
console.log(p)
console.log(p.name);
p.showName()