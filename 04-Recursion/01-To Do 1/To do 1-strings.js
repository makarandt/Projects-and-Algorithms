//To do 1 strings
//Remove blanks
//Create a function that, given a string, returns all the content of that string, but without blank spaces.
//Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".


function removeBlanks(str) {
    return str.split(" ").join("");
}
var str1 = "Pl ayTha tF u nkyM usi c";
console.log(removeBlanks(str1)); //PlayThatFunkyMusic
//Get digits
//Create a JavaScript function that, given a string, returns the integer made up of the digits in the string. Given " 0s1a3y5w7h9a2t4? 6! 8? 0 ", the function should return the number 1357924680 .

function getDigits(str) {

    var stringArr = str.split("");

    var intStr = "";
    for (var index = 0; index < stringArr.length; index++) {
        if (stringArr[index] % 1 == 0) {
            //console.log(stringArr[index]%1==0);
            intStr += stringArr[index]
            //console.log(intStr);
        }
    }
    return intStr;

}
var str2 = " 0s1a3y5w7h9a2t4? 6! 8? 0 ";
str2 = removeBlanks(str2);
console.log(getDigits(str2));


// Acronyms
// Create a function that, given a string, returns the acronym of the string (only the first letters, capitalized). Given " there is no free lunch. You have to pay for your food," returns " NHAG-DPPTC ".
// Given " Live from New York, it's Saturday night! ", Returns " ENDNYESPLN ".


function acronyms(str) {
    var strArr = str.split(" ");
    var retStr = "";
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            retStr += strArr[ind][0].toUpperCase();
        }
    }
    return retStr;
}
str3 = "there is no free lunch. You have to pay for your food,"; //returns " NHAG-DPPTC ".
str4 = " Live from New York, it's Saturday night! "; //Returns " ENDNYESPLN ".
console.log(acronyms(str3));
console.log(acronyms(str4));


//Count no spaces TODO<--
//Accepts a string and returns the number of characters without space that it finds in a string.
//For example, given, " Love, you're driving me crazy, " returns  29  (not 35).
function CNS(str) {
    var strArr = str.split(str)
    var count = 0;
    for (var index = 0; index < strArr.length; index++) {
        if (strArr[index] == false) {
            continue;
        } else {
            count++
        }
    }
    return count;

}
console.log(CNS(str5))
var str5=" Love, you're driving me crazy, "




// Remove Shorter Strings
//Remove shorter chains TODO<--
//Given an array of strings and a value (length), remove strings shorter than the length of the array.
function removeShort(strArr, val) {
    var strArr = str.split(" ");
    for (var ind = strArr.length-1; ind >= 0; ind--) {
        if (strArr[ind].length < val) {
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}