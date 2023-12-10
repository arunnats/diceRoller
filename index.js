document.getElementById('myButton').addEventListener('click', function() {
    var randomNum1 = Math.floor(Math.random()*6)+1;
    var randomNum2 = Math.floor(Math.random()*6)+1;

    var diceImage1 = "./images/dice"+randomNum1+".png";
    var diceImage2 = "./images/dice"+randomNum2+".png";

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", diceImage1);
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", diceImage2);

    if(randomNum1>randomNum2){
        document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
    }
    else if(randomNum1<randomNum2){
        document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "Its a draw!";
    }
});
