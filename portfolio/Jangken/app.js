var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result p");
const rock_div=document.getElementById("b");
const paper_div=document.getElementById("k");
const scissors_div=document.getElementById("g");

function getComputerChoice() {
    const choices=['b','k','g'];
    const randomNumber=(Math.floor(Math.random() *3));
    return choices[randomNumber];
}

function convert(kata) {
    if (kata === "b") { return "Batu"};
    if (kata === "g") { return "Gunting"};
    if (kata === "k") { return "Kertas"};
}

function win(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "Kau Menang!!" + '<br/>' + convert(userChoice) + " Mengalahkan " + convert(computerChoice);
}

function lose(userChoice,computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Kau Kalah!!" + '<br/>' + convert(userChoice) + " Dikalahkan " + convert(computerChoice);
}

function draw(userChoice,computerChoice) {
    result_div.innerHTML = "Seri" + '<br/>' + convert(userChoice) + " Dengan " + convert(computerChoice);;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "bg":
        case "kb":
        case "gk":{
            win(userChoice, computerChoice);
            break;}
        case "bk":
        case "kg":
        case "gb":{
            lose(userChoice, computerChoice);
            break;}
        case "bb":
        case "kk":
        case "gg":{
            draw(userChoice, computerChoice);
            break;}
    }
}

rock_div.addEventListener('click',function () {
    game("b");
})

paper_div.addEventListener('click',function () {
    game("k");
})

scissors_div.addEventListener('click',function () {
    game("g");
})