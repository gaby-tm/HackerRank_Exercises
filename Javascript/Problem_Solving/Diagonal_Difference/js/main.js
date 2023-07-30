//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

//Solution:

let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(arr));

function diagonalDifference(arr) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    let columnIndex =  arr.length;
    let diagonalDifference;

    for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
        diagonal1 += arr[rowIndex][rowIndex];
        columnIndex -= 1;
        diagonal2 += arr[rowIndex][columnIndex];
    }

    diagonalDifference = Math.abs(diagonal1 - diagonal2);

    return diagonalDifference;
}//function diagonalDifference



