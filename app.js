let leval = 1
let level2Selection = 5
let winningNumber = Math.ceil(Math.random() * 20)
let score = 20
let highScore = 0

const userInput = document.querySelector('#userInput')
const replaceable = document.querySelector('#replaceable')
const scoreHtml = document.querySelector('#score')
const highScoreHtml = document.querySelector('#Highscore')
const questionMark = document.querySelector('#questionMark')
const level = document.querySelector('#level')

level.innerHTML = leval



function check(){
   if(userInput.value > 20 || userInput.value < 1){
    replaceable.innerHTML = "Please enter a number between 1 and 20"
    return
   }
   if(leval > 1){
    level2Selection--
    questionMark.innerHTML = level2Selection
    if(level2Selection < 0){
        winningNumber = Math.ceil(Math.random() * 20)
        if(leval == 2){
            level2Selection = 4
        }else if(leval == 3){
            level2Selection = 3
        }else if(leval == 4){
            level2Selection = 2
        }else if(leval == 5){
            level2Selection = 1
        }
        questionMark.innerHTML = level2Selection
    }
   }


if(userInput.value == winningNumber){
    replaceable.innerHTML = "Congratulation You Win"
    if(score > highScore){
        highScoreHtml.innerHTML = score
        highScore = score
    }
    if(score >= 15){
        leval++
        replaceable.innerHTML = `Ready for Level ${leval}`
        level.innerHTML = leval
        if(leval == 2){
            level2Selection = 4
        }else if(leval == 3){
            level2Selection = 3
        }else if(leval == 4){
            level2Selection = 2
        }else if(leval == 5){
            level2Selection = 1
        }
        winningNumber = Math.ceil(Math.random() * 20)
        score = 20
        scoreHtml.innerHTML = score
        questionMark.innerHTML = level2Selection
    }
}else{
    score--
    scoreHtml.innerHTML = score
    if(userInput.value < winningNumber){
        replaceable.innerHTML = "Very low suggestion"
    }else{
        replaceable.innerHTML = "Very high suggestion"
    }
}
}

function inputChange(){
    if(userInput.value.length > 2){
        userInput.value = userInput.value.slice(0,2)
    }
}

function again(){
    winningNumber = Math.ceil(Math.random() * 20)
    score = 20
    scoreHtml.innerHTML = score
}