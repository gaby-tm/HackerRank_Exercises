let n = 6;
staircase(n);

// function staircase(n) {      //Withoutspaces
//     let stair = " ";
//     for (let i = 0; i < n; i++ ){
//         stair += "#";
//         console.log(stair);
//     }//for 
   
// }//function staircase

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let space = "";

        //Add spaces to the step
        for (let j = 0; j < n -i -1; j++ ) {
            space += " ";
        }//for

        //Add # to the steps
        for (let k = 0; k < i + 1; k++) {
            space += "#";
        }//for

        console.log(space);
    }//for

   
}//function staircase


