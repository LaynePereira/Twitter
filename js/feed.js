const MAX_LENGTH = 140; 

const twitterText = document.querySelector('#twitter-text');
const tweetButton = document.querySelector('#tweet-button');
const twitterList = document.querySelector('#twitter-list');
const twitterCounter = document.querySelector('#twitter-counter');

tweetButton.addEventListener('click', (event) => {
    event.preventDefault();
    addTweet();
    changeCounter();
    resetConfig();
});

twitterText.addEventListener('keyup', () => {
    let counterValue = MAX_LENGTH - twitterText.value.length;
    changeCounter(counterValue);
    disableButton();
    resizeTextarea();
});

function addTweet() {
    const dateString = new Date().toLocaleTimeString().substring(0,5);    
    const textEnters = twitterText.value.replace(/\n/g, '<br>'); 
    twitterList.innerHTML += tweetTemplate(textEnters, dateString);
    twitterText.value = '';
}

function tweetTemplate(tweet, date){
    return `<li class='tweet'>  <span>${date}</span> ${tweet}</li>`
}

function changeCounter(counter){
    twitterCounter.textContent = counter;
    if (twitterText.value.length > 130) {
        twitterCounter.setAttribute ('class', 'danger-color');
    }else if (twitterText.value.length > 120) {
        twitterCounter.setAttribute ('class', 'warning-color');
    }else {
        twitterCounter.setAttribute ('class', 'initial-color');        
    } 
}

function disableButton(counter){
    if (counter === MAX_LENGTH) {
        tweetButton.setAttribute('disabled', '');
    }else {
        tweetButton.removeAttribute ('disabled');
    }
}

function resizeTextarea(){
    let lines = twitterText.value.split('\n');
    let linesCount = 0;

    for(let i = 0; i < lines.length; i++) {
        let line = lines[i];
        linesCount += Math.max(Math.ceil(line.length / 50), 1);
    }    
    twitterText.setAttribute('rows', linesCount);
}

function resetConfig(){
    tweetButton.setAttribute('disabled', '');
    twitterCounter.textContent = MAX_LENGTH;
}








// const MAX_LENGTH = 140;

// let twitterText = document.querySelector('#twitter-text');
// let tweetButton = document.querySelector('#tweet-button');
// let twitterList = document.querySelector('#twitter-list');
// let twitterCounter = document.querySelector('#twitter-counter');


// tweetButton.addEventListener('click', addTweet);

// function addTweet(event) {
//     let newLi = document.createElement('li');
//     newLi.classList.add("tweet");
//     let dateString = new Date().toLocaleTimeString().substring(0, 5);
//     let textEnters = twitterText.value.replace(/\n/g, '<br>');

//     newLi.innerHTML = '(' + dateString + ') ' + textEnters;
//     twitterList.appendChild(newLi);
//     twitterText.value = '';
//     changeCounter();
// }

// twitterText.addEventListener('keyup', changeCounter);

// function changeCounter(event) {
//     let counterValue = MAX_LENGTH - twitterText.value.length;
//     twitterCounter.textContent = counterValue;

//     if (counterValue === MAX_LENGTH || counterValue < 0) {
//         tweetButton.setAttribute('disabled', '');
//     } else {
//         tweetButton.removeAttribute('disabled');
//     }
//     if (twitterText.value.length > 130) {
//         twitterCounter.setAttribute('class', 'danger-color');
//     } else if (twitterText.value.length > 120) {
//         twitterCounter.setAttribute('class', 'warning-color');
//     } else {
//         twitterCounter.setAttribute('class', 'initial-color');
//     }

//     let lines = twitterText.value.split('\n');
//     let linesCount = 0;

//     for (let i = 0; i < lines.length; i++) {
//         let line = lines[i];
//         linesCount += Math.max(Math.ceil(line.length / 50), 1);
//     }
//     twitterText.setAttribute('rows', linesCount);
// }




