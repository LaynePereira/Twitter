const MAX_LENGTH = 140;

var twitterText = document.querySelector ('#twitterText');
var tweetButton = document.querySelector ('#tweetButton');
var twitterList = document.querySelector ('#twitterList');
var twitterCounter = document.querySelector ('#twitterCounter');


tweetButton.addEventListener('click', addTweet);

function addTweet(event) {
    var newLi = document.createElement('li');
    newLi.textContent = twitterText.value;
    twitterList.appendChild(newLi);
    twitterText.value = ''; 
}

twitterText.addEventListener('keyup', changeCounter);

function changeCounter(event){
    var counterValue = MAX_LENGTH - twitterText.value.length;
    twitterCounter.textContent = counterValue;
    if (counterValue === MAX_LENGTH) {
        tweetButton.setAttribute('disabled', '');
    }else {
        tweetButton.removeAttribute ('disabled');
    }
}
