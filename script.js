let Allbox = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let user_score = document.querySelector(".userScore");
let comp_score = document.querySelector(".compScore");
let btn = document.querySelector("button") ;

let userScore = 0;
let compScore = 0;

let arr = ["rock", "paper", "scissor"]

// Getting computer choices
const compChoice = function () {
    let rand = Math.floor(Math.random() * 3);
    return arr[rand];
}

Allbox.forEach(function (Allbox) {
    Allbox.addEventListener("click", function () {
        let user_choice = Allbox.id;
        let comp_choice = compChoice();
        // console.log(user_choice, comp_choice)
        let userWin;
        if (user_choice === comp_choice) {
            msg.innerHTML = "Draw";

        }
        else if (user_choice === "rock") {
            userWin = comp_choice === "scissor" ? false : true;
        }
        else if (user_choice === "paper") {
            userWin = comp_choice === "rock" ? false : true;
        }
        else {
            userWin = comp_choice === "paper" ? false : true;
        }

        if (userWin === undefined) {
            msg.style.color = "black"
            msg.innerHTML = "Draw";
        }
        else if (userWin === true) {
            msg.innerHTML = "You lose"
            msg.style.color = "red"
            comp_score.innerHTML = ++compScore ;
        }
        else if(userWin === false) {
            msg.innerHTML = "You win"
            msg.style.color = "green"
            user_score.innerHTML = ++userScore ;
        }

    });
    
    btn.addEventListener("click", function() {
        user_score.innerHTML = 0 ;
        comp_score.innerHTML = 0 ;
        msg.innerHTML = "Start Your Game"
        msg.style.color = "black"
        userScore = 0 ;
        compScore = 0 ;
    }) ;
});


