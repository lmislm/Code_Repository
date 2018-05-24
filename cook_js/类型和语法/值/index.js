// ** 数组 **
// 稀疏数组
var a = []
a[0] = 1
a[2] = [ 3 ]
a[1]
console.log(a.length)
// 数组通过数字索引，同时也是对象，所以包含字符串键值和属性（这些不计算在数组长度内）
var a = []
a[0] = 1
a["foobar"] = 2
console.log("输出")
console.log(a.length)   // 1
console.log(a["foobar"]) // 2
console.log(a.foobar) // 2
console.log(a) // [ 1, foobar: 2 ]
// 字符串键值能被转换为 十进制数字，被当作 数字索引 处理
console.log("字符串被当做数字索引")
var a = []
a["13"] = 42
console.log(a.length) // 14
// 建议用* 对象 *来存放 键值/属性值，* 数组 *来存放 数字索引值
// 类数组(通过数字索引的值) [ 一般类数组转为数组:indexOf()、concat[]、forEach() ]
function foo () {
    var arr = Array.prototype.slice.call( arguments )
    console.log(arr)
    arr.push( "bam" )
    console.log( arr )
}
foo("bar", "baz")
// 字符串
console.log("字符串")
var a = "foo"
var b = ["f", "o", "o"]
console.log(a.join)
console.log(a.map)
var c = Array.prototype.join.call(a, "-")
var d = Array.prototype.map.call(a, function (v) {
    return v.toUpperCase() + '.'
}).join(" ")
console.log(c)
console.log(d)