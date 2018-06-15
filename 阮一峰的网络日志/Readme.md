# object
面向对象编程学习

### Javascript 面向对象编程（一）：封装

http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html

---

> Javascript是一种基于对象（object-based）的语言，你遇到的所有东西几乎都是对象。但是，它又不是一种真正的面向对象编程（OOP）语言，因为它的语法中没有class（类）。

``` bash
function Cat (name, color) {
    this.name = name
    this.color = color
}
Cat.prototype.type = '猫科动物'
Cat.prototype.eat = function(){
    console.log('吃老鼠')
}
var cat1 = new Cat('大毛','黄色')
var cat2 = new Cat('二毛','黑色')

console.log(cat1.name)
console.log(cat1.color)
console.log(cat1.name)
console.log(cat2.color)

console.log(cat1.constructor == Cat) 
console.log(cat2.constructor == Cat)

console.log(cat1.type)
cat1.eat()

console.log(cat1.eat == cat2.eat)

console.log(Cat.prototype.isPrototypeOf(cat1))
console.log(Cat.prototype.isPrototypeOf(cat2))

console.log(cat1.hasOwnProperty('name'))
console.log(cat1.hasOwnProperty('type'))

console.log('name' in cat1);
console.log('type' in cat1);

for (var prop in cat1 ) {
    console.log('cat1['+ prop +']=' + cat1[prop]);
}
```


### Javascript面向对象编程（二）：构造函数的继承

http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html

> 如何"封装"数据和方法，以及如何从原型对象生成实例。

> 对象之间的"继承"的五种方法

```bash
// function Animal () {
//     this.species = '动物'
// }

// function Cat (name, color) {
//     this.name = name
//     this.color = color
// }


// 构造函数绑定

// function Animal () {
//     this.species = '动物'
// }

// function Cat (name, color) {
//     Animal.apply(this, arguments)
//     this.name = name
//     this.color = color
// }

// var cat1 = new Cat('大毛','黄色')
// console.log(cat1.species);

// prototype 模式
// function Animal () {
//     this.species = '动物'
// }

// function Cat (name, color) {
//     this.name = name
//     this.color = color
// }


// Cat.prototype = new Animal();
// // Cat.prototype.constructor = Cat;
// var cat1 = new Cat('大毛','黄色');
// console.log(cat1.species);
// // console.log(cat1.name);

// // console.log(Cat.prototype);
// // console.log(cat1.constructor);
// console.log(Cat.prototype.constructor);

// console.log(Cat.prototype.constructor == Animal);
// console.log(cat1.constructor == Cat.prototype.constructor);
// console.log(cat1.constructor == Animal);

// 直接继承prototype
// function Animal () {}
// Animal.prototype.species = '动物'

// function Cat (name, color) {
//     this.name = name
//     this.color = color
// }

// Cat.prototype = Animal.prototype
// Cat.prototype.constructor = Cat
// var cat1 = new Cat('大毛','黄色')
// console.log(cat1.species);

// console.log(Animal.prototype.constructor);


// 利用空对象作为中介
// function Animal () {}
// Animal.prototype.species = '动物'


// function Cat (name, color) {
//     this.name = name
//     this.color = color
// }

// var F = function(){}
// F.prototype = Animal.prototype
// Cat.prototype = new F()
// Cat.prototype.constructor = Cat

// console.log(Animal.prototype.constructor);


// function extend (Child, Parent) {
//     var F = function () {}
//     F.prototype = Parent.prototype
//     Child.prototype = new F()
//     Child.prototype.constructor = Child
//     Child.uber = Parent.prototype
// }

// extend(Cat, Animal)
// var cat1 = new Cat('大毛','黄色')
// console.log(cat1.species);

// 拷贝继承

// function Animal () {}
// Animal.prototype.species = '动物'


// function Cat (name, color) {
//     this.name = name
//     this.color = color
// }

// function extend2 (Child, Parent) {
//     var p = Parent.prototype
//     var c = Child.prototype
//     for (var i in p ) {
//         c[i] = p[i]
//     }
//     c.uber = p
// }

// extend2(Cat, Animal)
// var cat1 = new Cat('大毛’，黄色')
// console.log(cat1.species);
```

> extend

``` bash
function extend (Child, Parent) {
    var F = function () {}
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.uber = Parent.prototype
}


function extend2 (Child, Parent) {
    var p = Parent.prototype
    var c = Child.prototype
    for (var i in p ) {
        c[i] = p[i]
    }
    c.uber = p
}

```