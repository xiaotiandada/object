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