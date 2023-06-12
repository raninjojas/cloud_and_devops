function verifyusername(username, usertype) {
    if((username[0] === username[0].toUpperCase() && username.length >= 5 &&username.length <= 10) && (usertype === "admin" || usertype === "manager") ) {
        return "username valid!"
    }   
    else {
        return "username invalid!"
    }
    
}

test = verifyusername("ranin","admin")
console.log(test)
test2 = verifyusername("ranin","manager")
console.log(test2)
test3 = verifyusername("Ranin","manager")
console.log(test3)