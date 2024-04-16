// document.getElementById('playNowBtn').addEventListener('click', function(){
//     const playgroundScreen = document.getElementById('playgroundScreen');
//    playgroundScreen.classList.remove('hidden')
//     const homeScreen = document.getElementById('homeScreen');
//     homeScreen.classList.add('hidden')
// })

function hideElementById(elementId) {
    const playgroundScreen = document.getElementById(elementId);
   playgroundScreen.classList.remove('hidden')
}
function showElementById(elementId) {
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden')
}

function geTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText)
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function geTextElementById(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
}


function setBackgroundColorPerKey(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('keyColor')
}
function removeBackgroundColorPerKey(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('keyColor')
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