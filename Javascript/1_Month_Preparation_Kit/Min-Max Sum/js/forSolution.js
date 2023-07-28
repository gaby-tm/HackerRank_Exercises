//Solution using forEach with user input:

let input = prompt("Enter 5 integer numbers separated by ,");
let arr = input.split(",");
//arr.sort();

//let arr = [1,2,3,4,5];
minMaxSum(arr);

function minMaxSum(arr) {
    let sum = 0;

    for (let index = 0; index<arr.length; index++) {
        sum += Number(arr[index]);
    }

    minSum = sum - arr[4];
    maxSum = sum - arr[0];

    console.log(minSum + " " + maxSum);

}//function minMaxSum