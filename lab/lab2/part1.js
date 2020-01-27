/**
       Refactor the work above into a few different functions that are reusable to the extent that you can.

       A hint to get you started: functions are often used to label a unit of work (such as
       testing whether or not a value is a string).
**/
var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];
/*calculates sum of different types (strings, numbers, etc)*/

function typeSum(array){
    var yourSum = 0;
    for(var i = 0; i<array.length;i++){
        var arrayValue = theArray[i];
        if(typeof arrayValue == 'string'){
            yourSum = yourSum + arrayValue.length;
        }
        else if(typeof arrayValue === 'number'){
            yourSum = yourSum+arrayValue;
        }
        else{
            console.log('Not sure how to proceed with value;', arrayValue);
        }
    }
    return yourSum;
}
var yourSum;
yourSum = typeSum(theArray);
