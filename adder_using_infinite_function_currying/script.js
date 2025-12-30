// WITH GLOBAL VAR

// let ans = 0;

// let sum = (num) => {
//     if(num){
//         ans += num;
//         return sum;
//     }
//     else{
//         return ans;
//     }
// }

// console.log(
//     sum(2)(3)(5)()
// )

// WITHOUT ANY VAR

function sum(num1) {
    if (num1) {
        return function (num2) {
            if (num2) {
                return sum(num1 + num2);
            }
            else {
                return num1;
            }
        }
    }
    else{
        return 0;
    }
}

console.log(
    sum(2)(3)(5)()
)