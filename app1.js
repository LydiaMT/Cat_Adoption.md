//Guessing game
function printNumbers(){
    for(let i = 0; i < 10; i++){
        document.write('<li>' + i + '</li>')
    }
}

let correctAnswer = 2;


function guessingGame(){
    let userAnswer = prompt('Please select a number 1 - 10 to win a prize');
    while (userAnswer < 1 || userAnswer > 10){
        userAnswer = prompt('Incorrect.  Please select a number 1 - 10');
    }
    let numberOfGuesses = 10
    for(let i = 0; i < numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('CongCATulations! You won!');
            break;
        } else if (userAnswer < correctAnswer){
            alert('Sorry, too low');
            userAnswer = prompt('Please select a number 1 - 10');
        } else if (userAnswer > correctAnswer){
            alert('Sorry, to high');
            userAnswer = prompt('Please select a number 1 - 10');
        }
    }
}

// How many cats do you want?
function HowManyCats() {
    let userInput = prompt('So now...how many cats do you want?');
    for (let i = 0; i <userInput; i++) {
        document.write('<img src=https://ih0.redbubble.net/image.846505062.7003/flat,100x100,075,f.jpg/>');
    }
}


