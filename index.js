const MAX_LENGTH = 140;

let twitterText = document.querySelector ('#twitterText');
let tweetButton = document.querySelector ('#tweetButton');
let twitterList = document.querySelector ('#twitterList');
let twitterCounter = document.querySelector ('#twitterCounter');


tweetButton.addEventListener('click', addTweet);

function addTweet(event) {
    let newLi = document.createElement('li');
    newLi.classList.add("tweet");
    let dateString = new Date().toLocaleTimeString().substring(0,5);    
    let textEnters = twitterText.value.replace(/\n/g, '<br>');
    
    newLi.innerHTML = '(' + dateString +') ' + textEnters;
    twitterList.appendChild(newLi);
    twitterText.value = '';
    changeCounter();
}

twitterText.addEventListener('keyup', changeCounter);

function changeCounter(event){
    let counterValue = MAX_LENGTH - twitterText.value.length;
    twitterCounter.textContent = counterValue;
    
    if (counterValue === MAX_LENGTH || counterValue < 0) {
        tweetButton.setAttribute('disabled', '');
    }else {
        tweetButton.removeAttribute ('disabled');
    }    
    if (twitterText.value.length > 130) {
        twitterCounter.setAttribute ('class', 'danger-color');
    }else if (twitterText.value.length > 120) {
        twitterCounter.setAttribute ('class', 'warning-color');
    }else {
        twitterCounter.setAttribute ('class', 'initial-color');        
    }    
    
    let lines = twitterText.value.split('\n');
    let linesCount = 0;
    
    for(let i = 0; i < lines.length; i++) {
        let line = lines[i];
        linesCount += Math.max(Math.ceil(line.length / 50), 1);
    }    
    twitterText.setAttribute('rows', linesCount);
}
