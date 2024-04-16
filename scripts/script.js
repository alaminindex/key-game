function continueGame() {
    const alphabet = getRandomAlphabet()
    // console.log('My Alphabet',alphabet);
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorPerKey(alphabet)
}

function play() {
    continueGame()
}