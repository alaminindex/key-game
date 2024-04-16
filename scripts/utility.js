document.getElementById('playNowBtn').addEventListener('click', function(){
    const playgroundScreen = document.getElementById('playgroundScreen');
   playgroundScreen.classList.remove('hidden')
    const homeScreen = document.getElementById('homeScreen');
    homeScreen.classList.add('hidden')
})

function setBackgroundColorPerKey(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('keyColor')
}

function getRandomAlphabet(s) {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    // random index 

    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);
    // console.log(index);
    const alphabet = alphabets[index]
        return alphabet


}