
// start ex 1 

function Ex1(names, ages){
    if(names.length !== ages.length){
        console.log("the two arrays are not simmiler");
        return;
    }
    for(let i = 0 ;i<names.length; i++){
        console.log(names[i] +" is "+ages[i]+" years old")
    }

}

Ex1(["loooo","bbbb"], [10,20]);

//end of ex1 
 
//start of ex2 

function Ex2(nums){
    let sum =0
    for(let i of nums){
        sum += i;
    }
    console.log("the final sum "+sum)
    return sum
}
const nums = [2,3,15,36,22,15,3366,33]
Ex2(nums)
//end of ex2 

//start of ex3 
function Ex3(sum,length){
    console.log("the Avg is : "+(sum / length))
    return sum / length
}

Ex3(Ex2(nums),nums.length)
//end of ex3 

// start of ex4 

function Ex4(){
    const nums = [];
    for(let i = 0; i<100; i++){
        nums.push(i+1)


    }
    console.log("the new Array :\n"+nums)
    return nums
}

const Nums = Ex4();
// end of ex 4 

//start of ex 5 
        
function Ex5(nums){
    console.log("odd numbers are :\n")
    for(let i = 0; i<100; i++){
        if(i%2 !== 1)
            console.log(nums[i] + ",")
    }
}
Ex5(Nums)

//end  of ex 5 

//start of ex 6 
function Ex6(nums){
     for(let i in nums){
        if(nums[i] === 709){
            console.log("foundes index "+ i)
            return i
        }
     }
return -1
}

let nums2 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
Ex6(nums2)

//end of ex 6 

//start of ex 7 
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i in names){
    people.push({name :names[i] , age: ages[i]})
}
console.log(people)

// end of ex 7 


//start of ex 8 
  
for(let element of people){
    console.log(element.name+"is "+element.age+" years old")
}
//end of ex 8


//start of ex 9 
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  for(let element in posts){
    if(posts[element].id === 2){
        posts.splice(element,1)
    }
}

console.log(posts)

//end of ex 9 

// start of ex 10 

const posts1 = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  for(let i in posts1){
    if(posts1[i].id === 2 ){
        for(let j in posts1[i].comments){
            if(posts1[i].comments[j].id === 3){
                posts1[i].comments.splice(j,1)
            }
        }
    }
    console.log(posts1)
  }

  // end of ex10

  // start challenge



  //end challenge

  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  const keys = Object.keys(dictionary)

  for(let i of keys){
      console.log("Words that begin with " + i +":")
    for(let j of dictionary[i]){
        console.log(j)
    }
  }
// end of extenssion challenge

