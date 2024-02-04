// 12 inch 1 feet ---------------------------

function inchTofeet(inch){
    const feet = inch / 12;
    return feet;
}
const methilaheight = inchTofeet(75);
// console.log(methilaheight);

function inchToFeet (inch){
    const feetFraction = inch/12;
    const feetnumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetnumber + " feet " + inchRemaining + " inch ";
    return result;
   
}
const methilaHight = inchToFeet(75);
// console.log(methilaHight);

// -----------------mile to kilometers---------------

function milToKm (mile){
    const kilometer = mile * 1.60934;
    return kilometer;
}
const total = milToKm(5);
// console.log(total);

// -----------------------km To Mile--------------------

function kmTomile (kilo){
    const mile = kilo * 0.621371;
    return mile;
}
console.log(kmTomile(5));