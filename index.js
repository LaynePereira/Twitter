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
    // desabilitar o botão
    if (counterValue === MAX_LENGTH || counterValue < 0) {
        tweetButton.setAttribute('disabled', '');
    }else {
        tweetButton.removeAttribute ('disabled');
    }
    
    // change color
    if (twitterText.value.length > 130) {
        twitterCounter.setAttribute ('class', 'red');
    }else if (twitterText.value.length > 120) {
        twitterCounter.setAttribute ('class', 'orange');
    }else {
        twitterCounter.setAttribute ('class', 'blue');
        
    }
    
    // redimensionar campo de texto
    var lines = twitterText.value.split('\n');
    twitterText.setAttribute('rows', lines.length);
    
}
