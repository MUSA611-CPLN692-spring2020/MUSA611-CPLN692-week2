/*This script takes a list and splits it*/


function first_split(list, seperator){
    var a;
    a = list.split(seperator);
    console.log(a)
    return a;
}

function second_split(list, seperator){
    var i;
    var b = [];
    for(i = 0;i<list.length;i++){
        b[i] = list[i].split(seperator);
        console.log(b[i])
    }
    console.log(b.length);
    return b;
}

var first_list, final_list;
first_list = first_split(healthCentersCSV,';');
final_list = second_split(first_list,',');
console.log(final_list)