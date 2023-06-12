// let codeYourFutureIsGreat = true;
let thisIsATerribleClass = false;
let testType =  typeof thisIsATerribleClass;
console.log("the type should be boolean, is it really boolean?? >> the answer is: ",testType);

function boolChecker(bool) {
    if (typeof bool === "boolean" ) {
      return "You've given me a bool, thanks!";
    }
  
    return "No bool, not cool.";
  }
  
 let message =  boolChecker(true);
 console.log(message)
 console.log("Any time!");