// 不使用构造函数实现"继承"


var Chinese = {
    nation: '中国'
}

// var Doctor = {
//     career: '医生'
// }

// object()方法

// function object(o) {
//     function F () {}
//     F.prototype = o
//     return new F()
// }

// var Doctor = object(Chinese)

// Doctor.career = '医生'

// console.log(Doctor.nation);

// 浅拷贝

// function extendCopy(p) {
//     var c = {}
//     for ( var i in p ) {
//         c[i] = p[i]
//     }
//     c.uber = p
//     return c
// }


// Chinese.birthPlaces = ['北极','上海']

// var Doctor = extendCopy(Chinese)

// Doctor.career = '医生'

// Doctor.birthPlaces.push('北京')

// console.log(Doctor.nation);

// console.log(Doctor.birthPlaces);

// console.log(Chinese.birthPlaces);

// 深拷贝

// 所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝。
// 递归调用"浅拷贝"


function deepCopy (p, c) {
    var c = c || {}
    for (var i in p ) {
        if(typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {}
            deepCopy(p[i], c[i])
        } else {
            c[i] = p[i]
        }
    }
    return c
}

// function deepCopy (p, c) {
//     c = c || {}
//     for (var i in p) {
//         if(p.hasOwnProperty(i)) {
//             if (typeof p[i] === 'object') {
//                 c[i] = Array.isArray(p[i]) ? [] : {}
//                 deepCopy(p[i], c[i])
//             } else {
//                 c[i] = p[i]
//             }
//         }
//     }
//     return c
// }


Chinese.birthPlaces = ['北京','上海']

var Doctor = deepCopy(Chinese, Doctor)

Doctor.birthPlaces.push('北京')

console.log(Doctor.birthPlaces);
console.log(Chinese.birthPlaces);