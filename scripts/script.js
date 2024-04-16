function handleKeyupEvent(e){
    const playerPressed = e.key;
    if(playerPressed === 'Escape'){
        gameOver()
    }
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase()

    if (playerPressed === expectedAlphabet) {

        // const score = document.getElementById('score')
        // const currentScoreText = score.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // console.log(currentScore);
        // const newScore = currentScore + 1;
        // // console.log(newScore);
        // score.innerText = newScore
        // --------------------------------------------
        const score = geTextElementValueById('score');
        const newScore = score + 1;
        setTextElementValueById('score', newScore)
        // console.log(newScore);


        removeBackgroundColorPerKey(expectedAlphabet)
        continueGame()
        
    } else {
        // const life = document.getElementById('life')
        // const currentLifeText = life.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // life.innerText = newLife
        // --------------------------------

        const life = geTextElementValueById('life');
        const newLife = life - 1;
        setTextElementValueById('life', newLife)
        if (newLife === 0) {
            gameOver()
        } else {
            
        }
    }

    


}

document.addEventListener('keyup', handleKeyupEvent
)

function continueGame() {
    const alphabet = getRandomAlphabet()
    // console.log('My Alphabet',alphabet);
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorPerKey(alphabet)
}

function play() {
    hideElementById('playgroundScreen')
    showElementById('finalScore')
    showElementById('homeScreen')

    setTextElementValueById('life',5)
    setTextElementValueById('score',0)

    continueGame()
}

function gameOver() {
    showElementById('playgroundScreen')
    hideElementById('finalScore');

    const lastScore = geTextElementValueById('score');
    // console.log(lastScore);
    setTextElementValueById('finalScoreText',lastScore);

    const alphabet = geTextElementById('currentAlphabet')
    removeBackgroundColorPerKey(alphabet)

}