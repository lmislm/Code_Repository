// Promise的立即执行性
/* var p = new Promise((resolve, reject) => {
    console.log("create a promise")
    resolve("success")
})
console.log("after new promise")
p.then(value => {
    console.log("value")
})
 */
// Promise 三种状态
/* let p1 =  new Promise((resolve, reject) => { resolve(1) })
let p2 = new Promise((resolve, reject) => { setTimeout(() => { resolve(2) }, 1000)})
let p3 = new Promise((resolve, reject) => { setTimeout(() => { reject(3) }, 1000)})
console.log(p1)
console.log(p2)
console.log(p3)
setTimeout(() => { console.log(p2) }, 1500) 
setTimeout(() => { console.log(p3) }, 1500)
p1.then(value => { console.log(value) })
p2.then(value => { console.log(value) })
p3.catch(err => { console.log(err) }) */

// Promise 状态的不可逆性
/* let p1 = new Promise((resolve, reject) => { 
    resolve("success1")
    resolve("success2")
})
let p2 = new Promise((resolve, reject) => {
    resolve("success")
    reject("reject")
})
p1.then(value => console.log(value) )
p2.then(value => console.log(value) ) */

// 链式调用
/* let p = new Promise((resolve, reject) => resolve(1))
p.then(value => {
    console.log(value) 
    return value*2
})
.then(value => console.log(value))
.then(value => {
    console.log(value)
    return Promise.resolve('resolve')
})
.then(value => {
    console.log(value)
    return Promise.reject('reject')
})
.then(value => { console.log('resolve:' + value ) }, err => { console.log('reject:' +err) }) */

// Promise then() 回调异步性
/* let p = new Promise((resolve, reject) => resolve("success"))
p.then(value => console.log(value))
console.log('called first??') */

// Promise 中的异常
/* let p1 = new Promise((resolve, reject) => {
    foo.bar()
    resolve(1)
})
p1.then(value => { console.log('p then value：' + value) }, err => { console.log('p then err：' + err) })
.then(value => { console.log('p1 then then value：' + value) }, err => { console.log('p1 then then err：' + err) })
let p2 = new Promise((resolve, reject) => {
    resolve(2)
})
p2.then(value => {
    console.log('p2 then value：' + value)
    foo.bar()
}, err => { console.log('p2 then err：' + err) })
.then(value => { console.log('p2 then then value：' + value)}, err => {
    console.log('p2 then then err：' + err)
    return 1
}).then(value => { console.log('p2 then then then value：' + value) }, err => { console.log('p2 then then then err：' + err) }) */

// Promise.resolve()
/* let p1 = Promise.resolve(1)
let p2 = Promise.resolve(p1)
let p3 = new Promise((resolve, reject) => resolve(1))
let p4 = new Promise((resolve, reject) => resolve(p1))

console.log(p1 === p2)
console.log(p1 === p3)
console.log(p1 === p4)
console.log(p3 === p4)

p4.then(value => console.log('p4=' + value))
p2.then(value => console.log('p2=' + value))
p1.then(value => console.log('p1=' + value))
 */

 // resolve vs reject
let p1 = new Promise((resolve, reject) => { resolve(Promise.resolve('resolve')) })
let p2 = new Promise((resolve, reject) => { resolve(Promise.reject('reject')) })
let p3 = new Promise((resolve, reject) => { reject(Promise.resolve('resolve')) })
p1.then(
  function fulfilled(value) { console.log('fulfilled_1：' + value) },
  function rejected(err) { console.log('rejected_1：' + err) }
)
p2.then(
  function fulfilled(value) { console.log('fulfilled_2：' + value) },
  function rejected(err) { console.log('rejected_2：' + err) }
)
p3.then(
  function fulfilled(value) { console.log('fulfilled_3：' + value) },
  function rejected(err) { console.log('rejected_3：' + err) }
)
