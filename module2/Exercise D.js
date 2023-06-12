function mymood(urmood) {
    if(urmood === "happy") {
        return  `if your  mood is ${urmood} so Good job, you're doing great! ` ;
    }
    if(urmood === "sad") {
        return  `if your  mood is ${urmood} remember Every cloud has a silver lining ` ;
    }
    if (typeof urmood == "number") {
        return  `Beep beep boop,  ${urmood} must be a string first to check ` ;
    }
    else {
        return "I'm sorry, I'm still learning about feelings";
    }
}
message =  mymood(2);
console.log(message)
message2 = mymood("2");
console.log(message2)
happyMessage = mymood("happy")
console.log(happyMessage)