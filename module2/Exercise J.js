function secondMatchesAmy(array) {
    if ( array[1] === "Amy") {
      return "Second index matched!";
    }
    return "Second index not matched";
  }
  names = ["Ranin", "Amy2", "Anne"];
  console.log(secondMatchesAmy(names))