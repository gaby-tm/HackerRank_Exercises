// Given five positive integers, find the minimum and maximum values that can be calculated by summing 
//exactly four of the five integers. Then print the respective minimum and maximum values as a single 
//line of two space-separated long integers.

// Example:
// The minimum sum is  1+3+5+7= 16 and the maximum sum is 3+5+7+9=24 . The function prints:
// 16 24

//SOLUTION using for.

let arr = [2,1,3,4,5];
arr.sort();
console.log(minMaxSum(arr));

function minMaxSum(arr) {
    let sum = 0;

    arr.forEach(element => {
        sum += element;
    });

    minSum = sum - arr[4];
    maxSum = sum - arr[0];

    return minSum + " " + maxSum;

}//function minMaxSum


