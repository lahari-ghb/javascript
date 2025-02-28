 //question 1
 function findLarger(num1,num2,callback){
    return callback(num1,num2)
}
var res = findLarger(20,30,(num1,num2)=> {
    if (num1>num2){
        return num1
    }
        return num2
})
console.log(res);

//question 2
function calculate(num1,num2,callback){
    return callback (num1,num2)*3;
}
var res=calculate(10,5,(num1,num2)=>{
    if(num1>num2){
        return num1+num2;
    }
    else if(num2>num1){
        return num1-num2;
    }
    else if(num1==num2){
        return 0;
    }
})
console.log(res);

//question 3
function checkEvenOdd(num, callback){
    var result = callback(num)
    if(result == "Even"){
        return "Even Number"
    }
    return "Odd Number"
}
var res = checkEvenOdd(8, (num) =>{
    if(num % 2 == 0){
        return "Even"
    }
    return "Odd"
})
console.log(res);

 //question 4
 function checkSign(num, callback){
    return callback(num);
}
var res = checkSign(-10,(num)=>{
    if(num>0){
        return "positive";
    }
    else if(num<0){
        return "Negative Value";
    }
    else if(num===0){
        return "Zero"
    }
})
console.log(res);

 //question 5
 function multiplyConditionally(num1, num2, callback){
    return callback (num1,num2)*4;
}
var res= multiplyConditionally(4,6,(num1,num2)=>{
    if(num1>num2){
        return num1*num2;
    }
    else if(num2>num1){
        return num1+num2;
    }
    else if(num1 == num2){
        return num1;
    }
})
console.log(res);
