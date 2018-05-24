// ** 七种内置类型 **
// null undefined boolean number string object symbol
console.log(typeof undefined === "undefined") // true 
console.log(typeof { life: 42 } === "object") // true
console.log(typeof Symbol() === "symbol") // true
// 特殊内置类型的检测
console.log(typeof null === "object")

var a = null
console.log((!a && typeof a === "object"))

// 特殊子类内置类型 函数
console.log(typeof function a () {} === "function")

function a(b,c) {}
console.log(a) // 2 (浏览器中)
console.log(typeof [1,2,3] === "object")
// ** 值和类型 **
console.log("值和类型")
// undefined && undeclared
var a
console.log(typeof a) // 浏览器中为undefined
// typeof undeclared
// wrong
// if (DEBUG) { console.log("Debugging is starting") } // ReferenceError: DEBUG is not defined
// right
if (typeof DEBUG !== "undefined") { console.log("Debugging is starting") }
// 检查变量是否在宿主程序中定义过
/* function doSomethingCool () {
    var helper =
        (typeof FeatureXYZ !== "undefined")
        FeatureXYZ :
        function () {}
    var val = helper
    // ..
} */
