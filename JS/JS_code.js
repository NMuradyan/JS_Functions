// let n = [2 ,4 ,7 ,5];

// function findNamber(n){
//     let maxNum = n[0];
//     let maxNum2;

//     for (i = 1; i < n.lenght; i++ ){
//         if(maxNum < n[i]){
//             maxNum2 = maxNum;
//             maxNum = n[i];
//         } else if (maxNum > n[i] && maxNum !== n[i]){
//             maxNum2 = n[i];
//         }
//     }
//     return maxNum2
// }

// let myArray = [1,2,3,4];

// function reversArray(myArray) {
//     let myArray2 = [];

//     for (let i = myArray.length - 1; i >= 0; i--) {
//         myArray2.push(myArray[i])
//     }
//     return myArray2 ;
// }

let myBigString = "Today the day on 2 minutes shorter, then yesterday";

function getArray(myBigString) {
    let bigArray = [];

    bigArray = myBigString.split(" ")

    return bigArray
    
}

console.log(getArray(myBigString));