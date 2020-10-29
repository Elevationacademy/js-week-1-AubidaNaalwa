// fixing errors 

//start of ex1 
/*
const person = {
    hungry: true,
    feed: function () {
      if (this.hungry) {// adding this. 
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm no longer hungry"

  */
// end of ex1 


// start of ex2 
/*
const pump = function (amount) {
    this.liters += amount;//adding this. to the letterts

    console.log('You put ' + amount + ' liters in ' + this.name);// dleteing this. for the amount 
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);

*/
//end of ex 2


//satrt of ex3 
/*
const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fly: function () {
      if (this.fuel < 2) {// error fixed by adding this. to plan object 
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());

*/
//end of ex 3/

//start of ex4 
const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function(num) {// adding function here
    if( this.coinCount < num ){
        this.coinCount = 0;
    }else {
        this.coinCount -= num;
    }

    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


//end of ex4