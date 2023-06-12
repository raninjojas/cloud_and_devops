function getAgeInYears(age) {
    return age * 1;
  }
  
  function createGreeting(name, age) {
    const ageInYears = getAgeInYears(age);
    const message =
      "My Name is " + name + " and I was born over " + ageInYears + " years ago!";
    return message;
  }
  console.log(createGreeting("Ranin", 29));