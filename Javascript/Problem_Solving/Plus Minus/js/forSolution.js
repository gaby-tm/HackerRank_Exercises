let arr = [-4, 3, -9, 0, 4, 1]
let n = arr.length;

plusMinus(arr);

function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
   
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            positives += 1;
        }//if
        else if (arr[index] < 0) {
            negatives += 1;
        }//else if
        else {
            zeros += 1;
        }
    }//for

    let positiveProportion = positives / n;
    let negativeProportion = negatives / n;
    let zeroProportion = zeros / n;

    console.log(positiveProportion.toFixed(6));
    console.log(negativeProportion.toFixed(6));
    console.log(zeroProportion.toFixed(6));

}//function plusMinus