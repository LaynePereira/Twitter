const MAX_LENGTH = 140;

let twitterText = document.querySelector ('#twitterText');
let tweetButton = document.querySelector ('#tweetButton');
let twitterList = document.querySelector ('#twitterList');
let twitterCounter = document.querySelector ('#twitterCounter');

tweetButton.addEventListener('click', addTweet);

function addTweet(event) {
    let newLi = document.createElement('li');
    let dateString = new Date().toLocaleTimeString().substring(0,5);    
    let textEnters = twitterText.value.replace(/\n/g, '<br>');
    
    newLi.innerHTML = '[' + dateString +'] ' + textEnters;
    twitterList.appendChild(newLi);
    twitterText.value = '';
    changeCounter();    
}

twitterText.addEventListener('keyup', changeCounter);

function changeCounter(event){
    var counterValue = MAX_LENGTH - twitterText.value.length;
    twitterCounter.textContent = counterValue;
    
    if (counterValue === MAX_LENGTH || counterValue < 0) {
        tweetButton.setAttribute('disabled', '');
    }else {
        tweetButton.removeAttribute ('disabled');
    }    
    if (twitterText.value.length > 130) {
        twitterCounter.setAttribute ('class', 'color3');
    }else if (twitterText.value.length > 120) {
        twitterCounter.setAttribute ('class', 'color2');
    }else {
        twitterCounter.setAttribute ('class', 'color1');        
    }    
    let linesCount = 0;
    for(let i = 0; i < lines.length; i++) {
        let line = lines[i];
        linesCount += Math.max(Math.ceil(line.length / 100), 5);
    }    
    twitterText.setAttribute('rows', linesCount);
}
