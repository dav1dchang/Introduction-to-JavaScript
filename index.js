/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;

if(votingAge >= 18){
    console.log(true);}
    else {
    console.log(false);}
    
    
//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var year = 2020;
var a = 20;

if (year <= 2020){
  console.log(year+a);
}
  else {
    console.log('Year is too high of a value.')
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var string = "1999";
var x =
Number(string);
console.log(x);

//Task d: Write a function to multiply a*b 

function multiply(a,b){
    console.log(a * b);
   } 
   multiply(5,9)

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function HumanAge(age){
    var DogAgeCalculated = 7*age;
    console.log("You are "+ DogAgeCalculated +" in dog years.")
  }
  
  HumanAge(28);

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function hungryDog(weight, age){
    if(age>=1 && weight<=5){
      console.log(weight*.05)
    }else if(age>=1 && weight>=6 && weight<=10){
      console.log(weight*.04)
    }else if(age>=1 && weight>=11 && weight<=15){
      console.log(weight*.03)
    }else if(age>=1 && weight>15){
      console.log(weight*.02)
    }else if(age>=1/6 && age<=1/3){
      console.log(weight*.10)
    }else if(age>1/3 && age<=7/12){
      console.log(weight*.05)
    }else if(age>7/12 && age<1){
      console.log(weight*.04)
    }
  }//function
  
  hungryDog(15, 1);

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function getUserSelection(userInput) {
    if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
      console.log(userInput);
    } else {
      console.log('not a valid selection');
    }
    };
  
    var computerSelection = Math.floor(Math.random() * 3); 
    if (computerSelection == 0){
        computerSelection = "rock";
    } else if(computerSelection == 1){
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
  
  function whoWon(userSelection,computerSelection) {
    if (userSelection === computerSelection) {
      console.log('Game was tied');
    } else if (userSelection === 'rock' &&
      computerSelection === 'paper') {
      console.log('Computer won');
    } else if (userSelection === 'paper' && computerSelection === 'rock') {
      console.log('You won');
    
    } else if (userSelection === 'paper' &&
      computerSelection === 'scissors') {
      console.log('Computer won');
    } else if (userSelection === 'scissors' && computerSelection === 'paper') { 
      console.log('You won');
    
    } else if (userSelection === 'scissors' &&
      computerSelection === 'rock') {
      console.log('Computer won');
    } else if (userSelection === 'rock' && computerSelection === 'scissors') {
      console.log('You won');
    }
  };

  function playGame() {
    var userSelection = getUserSelection('scissors');
    var computerSelection = getComputerSelection()
    console.log(`you chose ${userSelection}`);
    console.log(`computer chose ${computerSelection}`);
    console.log(whoWon(userSelection,computerSelection));
  };  

 playGame('scissors');

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function getKm(kilometers){
    var MilesCalculated = 0.621371*kilometers;
    console.log(""+ MilesCalculated +" miles")
  }
  
  getKm(100);


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function getFeet(feet){
    var CmCalculated = 30.48*feet;
    console.log(""+ CmCalculated +" cm")
  }
  
  getFeet(6);

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`


function annoyingSong(i) {  
    var bottles;
    var sodasRemaining;
    for (i; i >= 1; i--) {
      if (i == 1) {
        bottles = "bottle";
        sodasRemaining = "No bottles of soda on the wall!";
      } else {
        bottles = "bottles";
        sodasRemaining = i - 1 + " bottles of soda on the wall!";
      } console.log(i+ " " + bottles + " of soda on the wall,");
      console.log(i+ " " + bottles + " of soda,");
      console.log("Take one down, pass it around,");
      console.log(sodasRemaining);
      } 
      
  }//function
  console.log(annoyingSong(99));


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
var grade = Math.floor(Math.random() * 101);
console.log(grade);
    if(grade<=59){
        console.log("F");
    }else if(grade<=69){
        console.log("D");
    }else if(grade<=79){
        console.log("C");
    }else if(grade<=89){
        console.log("B");
    }else {
        console.log("A");
    }



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





