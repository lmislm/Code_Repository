/**
 * Created by Administrator on 2017/3/25.
 */

function maxNumber() {
    return Math.max.apply(null,arguments)
}
// function maxNumber(num1,num2) {
//     return Math.max.call(null,num1,num2);
// }
console.log(maxNumber(4,3));