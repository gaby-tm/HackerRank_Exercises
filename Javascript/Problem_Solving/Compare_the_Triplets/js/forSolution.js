//Solution using for:

let a = [5, 6, 7];
let b = [3, 6, 10];

compareTriplets(a,b);

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    let returnArray = [];

    for (let index = 0; index < a.length; index++) {
        if (a[index] > b[index]){
            alice += 1;
        } else if (b[index] > a[index]){
            bob += 1;
        }
    }//for
    
    returnArray[0] = alice;
    returnArray[1] = bob; 
    
    console.log(returnArray);
}//compareTriplets