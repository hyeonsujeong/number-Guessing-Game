var answerNumber = Math.floor(Math.random()*100) + 1;
var guessHistory = document.querySelector('.guessHistory');
var yesOrNo = document.querySelector('.yesOrNo');
var highOrLow = document.querySelector('.highOrLow');
var guessButton = document.querySelector('.guessButton');
var guessForm = document.querySelector('.guessForm');
var guessCount = 1;

function checkYourNumber() {
    // guessForm.value이 숫자면 userGuess에 담음
    if (!isNaN(guessForm.value)){
        var userGuess = Number(guessForm.value);

        if (userGuess > 0 && userGuess < 101){
            if(guessCount === 1) {
                guessHistory.textContent = '입력한 숫자들 :';
            }        
            guessHistory.textContent += userGuess + ' ';

            if (userGuess === answerNumber) {
                yesOrNo.textContent = '축하합니다! 정답입니다!';
                yesOrNo.style.backgroundColor = 'green';
                highOrLow.textContent ='';
                setGameOver();
            } else if (guessCount === 10) {
                yesOrNo.textContent = '!!!게임오버!!!';
                highOrLow.textContent = '';
                setGameOver();
            } else {
                yesOrNo.textContent = '틀렸습니다';
                yesOrNo.style.backgroundColor = 'red';
                if (userGuess < answerNumber) {
                    highOrLow.textContent = '정답은 더 큽니다';
                } else if(userGuess > answerNumber) {
                    highOrLow.textContent = '정답은 더 작습니다';
                }
            }
            // 조건에 부합할 경우에만 guessCount 증가
            guessCount++;
        } else{
            yesOrNo.textContent = '1부터 100 사이의 숫자를 입력해 주세요!';
            yesOrNo.style.backgroundColor = 'red';            
        }
    // 숫자가 아닐 경우 경고    
    } else {
        yesOrNo.textContent = '1부터 100 사이의 숫자를 입력해 주세요!';
        yesOrNo.style.backgroundColor = 'red';
    }
    guessForm.value = '';
}

guessButton.addEventListener('click', checkYourNumber);

var restartButton;

function setGameOver() {
    guessForm.disabled = true;
    guessButton.disabled = true;
    restartButton = document.createElement('button');
    restartButton.textContent = '새 게임 시작하기';
    document.body.appendChild(restartButton);
    restartButton.addEventListener('click', restartGame);
}


function restartGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultDiv p');
    for (var i=0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    restartButton.parentNode.removeChild(restartButton);
    guessForm.disabled = false;
    guessButton.disabled = false;
    guessForm.value = '';
    guessForm.focus();
    yesOrNo.style.background = 'white';
    answerNumber = Math.floor(Math.random() * 100) + 1;
}