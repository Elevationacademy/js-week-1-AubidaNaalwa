
// start ex1 
const calcAge = function(currentTime, birth){
    return (currentTime - birth);
}
const age = calcAge(2017, 1989)
console.log(`your age is ${age}`)

//end ex1

//start ex2 
const posAge = function(currentTime, birth){
    let age = calcAge(currentTime,birth)
    return {age1: age, age2:age-1};
}
console.log(`two possiable ages first : ${posAge(2018,2015).age1} and second is  ${posAge(2018,2015).age2}`)
//end ex2 

//start of ex 3
const isEven = function(num){
    return(num%2 === 0)
}
console.log(`the 11 is even => ${isEven(11)},and 12 is even => ${isEven(12)}`)

//end of ex3 

//start of ex 4 
const nums = [10,20,30,44,43,41,51,88,91,93,10,101] ;
const printOdd = function(nums){
    console.log(`the odd numbers in the array are: `);
    for(let i of nums){
        if(i %2 === 1){
            console.log(i);
        }
    }
};
printOdd(nums);

//end of ex4 

//start of ex 5 
const checkifTheNumberInTheArray = function(nums, num){
    for(let i of nums){
        if(i === num ){
            return true;
        }
    }
    return false;
}

console.log(`result ${checkifTheNumberInTheArray([1,2,3], 3)}`)
console.log(`result ${checkifTheNumberInTheArray([1,2,3], 5)}`)

//end of ex 5 

// start of ex 6
const calculator = {
    add : function(num1,num2){
        return (num1+num2)
    },
    subtract : function(num1,num2){
        return (num1-num2)
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))

//end of ex 6

//start of ex7 
const increaseByNameLength = function(money, name){

    return money * name.length;
}
const makeRegal = function(name){
    return "His Royal Highness, "+name;
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100)
//end of ex7 


// challenge start 
//here we gonna implemment splice from scratch 

const splice = function(arr,i,j,val1 ,val2 ){
   let deleted = []
    if(arr === undefined || arr.length === 0 ){
        alert(`error: trying to use SPLICE function without defined parametars `)
        return deleted
    }
    if(j === undefined ){
        while(arr.length > i){
            deleted.push(arr.pop());
        }
        return deleted
    }
    let tmp = []
    if( i >= 0){
        
        for(let k=0;k<i;k++){
            tmp.push(arr[k]); 
        }
        if(val1 !== undefined){
        tmp.push(val1);}

        if(val2 !== undefined){
            tmp.push(val2);
        }
        if(j > 0){
            for(let t = i;t<i+j;t++){
                    deleted.push(arr[t])
            }
        }
        for(let k = i+j;k<arr.length;k++){
            tmp.push(arr[k]); 
        }
        while(arr.length > 0){
            arr.pop();
        }
        for(let k = 0 ;k<tmp.length ;k++){
            arr.push(tmp[k]);
        }
        return deleted
    }
}


let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]


// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]


// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] 