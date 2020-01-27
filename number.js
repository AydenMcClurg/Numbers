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

    if(two === third){
        o2 ++;
    }
    if(two === fourth){
        o2 ++;
    }
    if(two === fifth){
        o2 ++;
    }
    if(two === sixth){
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
    // if(o1 === 1 && o2 === 1 && o3 === 1 && o4 === 1 && o5 === 1 && o6 === 1){
    //     output.innerHTML = "There are no duplicates";
    // }else if(max !== o1){
    //     output.innerHTML = "The mode is " + first + " and it appears " + o1 +;
    // }else if(max !== o2){
    //     output.innerHTML = "The mode is " + second + " and it appears " + o2 +;
    // }else if(max !== o3){
    //     output.innerHTML = "The mode is " + third + " and it appears " + o3 +;
    // }else if(max !== o4){
    //     output.innerHTML = "The mode is " + fourth + " and it appears " + o4 +;
    // }else if(max !== o5){
    //     output.innerHTML = "The mode is " + fifth + " and it appears " + o5 +;
    }
}

