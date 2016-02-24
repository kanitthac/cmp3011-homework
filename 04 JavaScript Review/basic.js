function randomFruits () {
    
    var fruits = ['mango', 'orange', 'cherry', 'peach', 'apple', 'blueberry', 'strawberry'];
    var num = Math.floor((Math.random() * 7));
    var rFruits = fruits[num];
    return rFruits;
}

document.getElementById("FruitHere").innerHTML = randomFruits ();