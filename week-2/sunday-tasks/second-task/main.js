class person{
    constructor(name,  age, city){ 
        this.name = name
        this.age= age
        this.city= city
    }
    printMe(){
        console.log("my Name is :"+ this.name)
        console.log("my Age is :"+ this.age)
        console.log("Live in :"+ this.city)
    }



}
// start : solution OF Exercise 1

function checkPeople(p1,p2)  {
    if(p1.age === p2.age){
        if(p1.city === p2.city ){
            console.log(p1.name + " wanted to date Robert")

        }else{
            console.log(p1.name + " wanted to date Robert, but couldn't")
        }
    }
    
}
//end :  solution Exercise 1


const p1 = new person("Jill",25,"TL")
const p2 = new person("Robert", 25,"TL")
checkPeople(p1,p2)
listMange(p1,p2)

//START : solution Exercise 2
function listMange(p1,p2){
    const persons = [];

    persons.push(p1,p2);
    console.log("persons together before modeify:\n" )
    for(i = 0 ; i<persons.length ; i++){
        persons[i].printMe()
    }
    persons[0].age = 20;
    persons[0].city = "YAFOO"
    persons.splice(1,1);
    console.log("persons together after modeify:\n")
    for(i = 0 ; i<persons.length ; i++){
        persons[i].printMe()
    }
}

//END : solution Exercise 2

//ex 3 
const arr = [p1,p2] ;

const myList = [];
myList.push(arr);
console.log(myList);
// end of ex3 

//start of ex 4
 

library = { 
    books : [

        {
            title:"crack",author:"harry"
        },
        {
            title:"loooloo",author:"john"
        }
    ]

}

console.log(library);

// end of ex 4 

// start of ex5
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  };
  
const name = prompt('Please enter the name for your reservation');
console.log(name);

const keyNames = Object.keys(reservations);
for(i=0;i<keyNames.length ;i++){
    reservations[keyNames[i].toLowerCase()] =  {claimed :  reservations[keyNames[i]].claimed};
}

console.log("res "+ reservations["ted"])

if (reservations[name.toLowerCase()] != undefined && reservations[name.toLowerCase()].claimed === false ){
    
    alert("welcome, "+name)
}
else if(reservations[name.toLowerCase()] != undefined  && reservations[name.toLowerCase()].claimed === true){
    alert("Hmm, someone already claimed this reservation")
}else{
    alert("You have no reservation")
    // adding 5.1 
   
    reservations[name.toLowerCase()] = {claimed : true};
    
    console.log(reservations);
}

//end of ex 5 


// start of ex 6 


const date = 3
function checkKitchen(kitchen,works,hasOven){
    const nameItem = kitchen.fridge.items[1].name;
    const nameOwner = kitchen.owner;
    const expDay = kitchen.fridge.items[1].expiryDate;

    if(works && hasOven){
        console.log(nameOwner + "'s " + nameItem +" expired " + expDay + " day ago.. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.")
    }else if(works && !hasOven){
        console.log(nameOwner + "'s " + nameItem +" expired " + expDay + " day ago.Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.")
    }else if(!works && hasOven){
        console.log(nameOwner + "'s " + nameItem +" expired " + expDay + " day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay 250 to fix the fridge.")
    }else{
        console.log(nameOwner + "'s " + nameItem +" expired " + expDay + " day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay 250 to fix the fridge.")

    }
}
const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

checkKitchen(kitchen,true,true);
checkKitchen(kitchen,false,true);
checkKitchen(kitchen,true,false);
checkKitchen(kitchen,false,false);
