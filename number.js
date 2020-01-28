"use strict";

var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");


// function hello(){
//     output.innerHTML = "hello world";
// }

//mean, largest, smallest
function largeNum(){
    var first = doc1.value;
    var second = doc2.value;
    var third = doc3.value;
    var fourth = doc4.value;
    var fifth = doc5.value;
    var sixth = doc6.value;
    var largest = first;

    if(largest === first){
        output.innerHTML = "The first number is largest";
    }
    if(largest < second){
        largest = second;
        output.innerHTML = "second number is the large";
    }
    if(largest < third){
        largest = third;
        output.innerHTML = "third number is the largest";
    }
    if(largest < fourth){
        largest = fourth;
        output.innerHTML = "fourth number is the largest";
    }
    if(largest < fifth){
        largest = fifth;
        output.innerHTML = "fifth number is the largest";
    }
    if(largest < sixth){
        largest = sixth;
        output.innerHTML = "sixth number is the largest";
    }
}

function smallNum(){
    var first = doc1.value;
    var second = doc2.value;
    var third = doc3.value;
    var fourth = doc4.value;
    var fifth = doc5.value;
    var sixth = doc6.value;
    var smallest = first;

    if(smallest === first){
        output.innerHTML = "The first number is the smallest";
    }
    if(smallest > second){
        smallest = second;
        output.innerHTML = "The second number is the smallest";
    }
    if(smallest > third){
        smallest = third;
        output.innerHTML = "The third number is the smallest";
    }
    if(smallest > fourth){
        smallest = fourth;
        output.innerHTML = "The fourth number is the smallest";
    }
    if(smallest > fifth){
        smallest = fifth;
        output.innerHTML = "The fifth number is the smallest";
    }
    if(smallest > sixth){
        smallest = sixth;
        output.innerHTML = "The sixth number is the smallest";
    }
}

function numMean(){
     // parseFloat
     var first = parseFloat(doc1.value);
     var second = parseFloat(doc2.value);
     var third = parseFloat(doc3.value);
     var fourth = parseFloat(doc4.value);
     var fifth = parseFloat(doc5.value);
     var sixth = parseFloat(doc6.value);

     output.innerHTML = (first + second + third + fourth + fifth + sixth) /6;
}

//order

function order(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 0;//smallest
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;//largest
     
    o1 = Math.min(first, second, third, fourth, fifth, sixth);

    if(o1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === second){
        first = first;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === third){
        first = first;
        second = second;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = sixth;
    }

    o2 = Math.min(first, second, third, fourth, fifth);

    if(o2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o2 === second){
        first = first;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o2 === third){
        first = first;
        second = second;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o2 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o2 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = sixth;
    }

    o3 = Math.min(first, second, third, fourth);

    if(o3 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o3 === second){
        first = first;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o3 === third){
        first = first;
        second = second;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o3 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o3 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = sixth;
    }

    o4 = Math.min(first, second, third);

    if(o4 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o4 === second){
        first = first;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o4 === third){
        first = first;
        second = second;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o4 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o4 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = sixth;
    }

    o5 = Math.min(first, second);

    if(o5 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o5 === second){
        first = first;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o5 === third){
        first = first;
        second = second;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o5 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o5 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = sixth;
    }

    o6 = Math.min(first);

    if(o6 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o6 === second){
        first = first;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o6 === third){
        first = first;
        second = second;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o6 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o6 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = sixth;
    }

    output.innerHTML = o1 +" "+ o2 +" "+ o3 +" "+ o4 +" "+ o5 +" "+ o6;

}

//mode

function mode(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 1;
    var o2 = 1;
    var o3 = 1;
    var o4 = 1;
    var o5 = 1;
    var o6 = 1;

    if(first === second){
        o1 ++;
    }
    if(first === third){
        o1 ++;
    }
    if(first === fourth){
        o1 ++;
    }
    if(first === fifth){
        o1 ++;
    }
    if(first === sixth){
        o1 ++;
    }

    if(second === third){
        o2 ++;
    }
    if(second === fourth){
        o2 ++;
    }
    if(second === fifth){
        o2 ++;
    }
    if(second === sixth){
        o2 ++;
    }

    if(third === fourth){
        o3 ++;
    }
    if(third === fifth){
        o3 ++;
    }
    if(third === sixth){
        o3 ++;
    }

    if(fourth === fifth){
        o4 ++;
    }
    if(fourth === sixth){
        o4 ++;
    }
    
    if(fifth === sixth){
        o5 ++;
    }
    
    var max = Math.max(o1, o2, o3, o4, o5, o6);
    if(o1 === 1 && o2 === 1 && o3 === 1 && o4 === 1 && o5 === 1 && o6 === 1){
        output.innerHTML = "There are no duplicates";
    }else if(max === o1){
        output.innerHTML = "The mode is " + first + " and it appears " + o1;
    }else if(max === o2){
        output.innerHTML = "The mode is " + second + " and it appears " + o2;
    }else if(max === o3){
        output.innerHTML = "The mode is " + third + " and it appears " + o3;
    }else if(max === o4){
        output.innerHTML = "The mode is " + fourth + " and it appears " + o4;
    }else if(max = o5){
        output.innerHTML = "The mode is " + fifth + " and it appears " + o5;
    }
}

//unique

function unique(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var u1 = 1;
    var u2 = 1;
    var u3 = 1;
    var u4 = 1;
    var u5 = 1;
    var u6 = 1;

    if(first === second){
        u1 ++;
    }
    if(first === third){
        u1 ++;
    }
    if(first === fourth){
        u1 ++;
    }
    if(first === fifth){
        u1 ++;
    }
    if(first === sixth){
        u1 ++;
    }
    if(second === third){
        u2 ++;
    }
    if(second === fourth){
        u2 ++;
    }
    if(second === fifth){
        u2 ++;
    }
    if(second === sixth){
        u2 ++;
    }
    if(third === fourth){
        u3 ++;
    }
    if(third === fifth){
        u3 ++;
    }
    if(third === sixth){
        u3 ++;
    }
    if(fourth === fifth){
        u4 ++;
    }
    if(fourth === sixth){
        u4 ++;
    }
    if(fifth === sixth){
        u5 ++;
    }

    if(u1 === 1){
        output.innerHTML += " " + first + " is unique. ";
    }
    if(u2 === 1){
        output.innerHTML += " " + second + " is unique. ";
    }
    if(u3 === 1){
        output.innerHTML += " " + third + " is unique. ";
    }
    if(u4 === 1){
        output.innerHTML += " " + fourth + " is unique. ";
    }
    if(u5 === 1){
        output.innerHTML += " " + fifth + " is unique. ";
    }
    if(u6 === 1){
        output.innerHTML += " " + sixth + " is unique. ";
    }
}

//duplicate
function duplicate(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    
    var d1 = 1;
    var d2 = 1;
    var d3 = 1;
    var d4 = 1;
    var d5 = 1;
    var d6 = 1;

    if(first === second){
        d1 ++;
    }
    if(first === third){
        d1 ++;
    }
    if(first === fourth){
        d1 ++;
    }
    if(first === fifth){
        d1 ++;
    }
    if(first === sixth){
        d1 ++;
    }
    if(second === third){
        d2 ++;
    }
    if(second === fourth){
        d2 ++;
    }
    if(second === fifth){
        d2 ++;
    }
    if(second === sixth){
        d2 ++;
    }
    if(third === fourth){
        d3 ++;
    }
    if(third === fifth){
        d3 ++;
    }
    if(third === sixth){
        d3 ++;
    }
    if(fourth === fifth){
        d4 ++;
    }
    if(fourth === sixth){
        d4 ++;
    }
    if(fifth === sixth){
        d5 ++;
    }

    output.innerHTML = "";

    if(d1 === 1 && d2 === 1 && d3 === 1 && d4 === 1 && d5 === 1 && d6 === 1){
        output.innerHTML += "there is no duplicates"
    }
    if(d1 !== 1){
        output.innerHTML += " " + first + " is a duplicate and it appears " + d1 + " times. ";
    }
    if(d2 !== 1 && second !== first){
        output.innerHTML += " " + second + " is a duplicate and it appears " + d2 + " times. ";
    }
    if(d3 !== 1 && third !== second && third !== first){
        output.innerHTML += " " + third + " is a duplicate and it appears " + d3 + " times. ";
    }
    if(d4 !== 1 && fourth !== third && fourth !== second && fourth !== first){
        output.innerHTML += " " + fourth + " is a duplicate and it appears " + d4 + " times. ";
    }
    if(d5 !== 1 && fifth !== fourth && fifth !== third && fifth !== second && fifth !== first){
        output.innerHTML += " " + fifth + " is a duplicate and it appears " + d5 + " times. ";
    }
    if(d6 !== 1 && sixth !== fifth && sixth !== fourth && sixth !== third && sixth !== second && sixth !== first){
        output.innerHTML += " " + sixth + " is a duplicate and it appears " + d6 + " times. ";
    }
}

//order from least to greatest
function order(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    
    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(first, second, third, fourth, fifth, sixth)
    if(o1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === fifth){
        fifth = sixth;
    }

    o2 = Math.min(first, second, third, fourth, fifth)
    if(o2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === fifth){
        fifth = sixth;
    }

    o3 = Math.min(first, second, third, fourth)
    if(o3 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === fifth){
        fifth = sixth;
    }

    o4 = Math.min(first, second, third)
    if(o4 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === fifth){
        fifth = sixth;
    }

    o5 = Math.min(first, second)
    if(o5 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o5 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o5 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o5 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o5 === fifth){
        fifth = sixth;
    }

    o6 = Math.min(first)
    if(o6 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o6 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o6 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o6 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o6 === fifth){
        fifth = sixth;
    }

    var order = output.innerHTML = o1 +" "+ o2 +" "+ o3 +" "+ o4 +" "+ o5 +" "+ o6;
    return order;
}

//middle
function mid(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;

    o1 = Math.min(first, second, third, fourth, fifth, sixth)
    if(o1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o1 === fifth){
        fifth = sixth;
    }

    o2 = Math.min(first, second, third, fourth, fifth)
    if(o2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o2 === fifth){
        fifth = sixth;
    }

    o3 = Math.min(first, second, third, fourth)
    if(o3 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o3 === fifth){
        fifth = sixth;
    }

    o4 = Math.min(first, second, third)
    if(o4 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if (o4 === fifth){
        fifth = sixth;
    }

    output.innerHTML = o3 + " and " + o4 + " are the middle numbers " + (o3 + o4) / 2 + " is the median";
}


//range

function range(){
    var range =  largeNum() - smallNum();
    output.innerHTML = " The Range is " + range;
}