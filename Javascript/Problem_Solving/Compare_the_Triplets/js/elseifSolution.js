// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

//Solution using else if:

let a = [5, 6, 7];
let b = [3, 6, 10];

compareTriplets(a,b);

function compareTriplets(a, b) {
    let returnArray = [];
    let alice0 = 0; 
    let bob0 = 0;
    let alice1 = 0;
    let bob1 = 0;
    let alice2 = 0;
    let bob2 = 0;
    let alice = 0;
    let bob = 0;
    
    if (a[0] > b[0]){
        alice0 = 1;
    } else if (b[0] > a[0]){
        bob0 = 1
    } else {
        alice0=0;
        bob0=0;
    }
    
    if (a[1] > b[1]){
        alice1 = 1;
    }else if (b[1] > a[1]){
        bob1 = 1;
    } else {
        alice1=0;
        bob1=0;
    }
    
    if (a[2] > b[2]){
        alice2 = 1;
    }else if (b[2] > a[2]){
        bob2 = 1;
    } else {
        alice2=0;
        bob2=0;
    }
        
    alice = alice0 + alice1 + alice2;
    bob = bob0 + bob1 + bob2;
    
    returnArray[0] = alice;
    returnArray[1] = bob; 
    
    console.log(returnArray);
}//compareTriplets