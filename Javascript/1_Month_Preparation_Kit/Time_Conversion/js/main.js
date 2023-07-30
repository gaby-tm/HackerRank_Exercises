// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

//Solution:

let s = "07:05:45PM";

console.log(timeConversion(s));

function timeConversion(s) { 
    let hour = Number(s.substring(0,2));
    let minutes = s.substring(2,8);
    let morningHour = s.substring(0,8);
    let militaryTime;

    //if Noon:
    if ((hour == 12) && (s.indexOf("PM") !== -1)) {
        militaryTime = morningHour;
    }
    //if Midnigth:
    else if((hour == 12) && (s.indexOf("AM") !== -1)) {
        militaryTime = "00" + minutes;
    }
    //if Morning before Noon:
    else if((hour < 12) && (s.indexOf("AM") !== -1)) {
        militaryTime = morningHour;
    } 
    //else (if Afternoon:)
    else {
        militaryTime = (hour + 12) + minutes;
    }

    return militaryTime;
}//function timeConversion

