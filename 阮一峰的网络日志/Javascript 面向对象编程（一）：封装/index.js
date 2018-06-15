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