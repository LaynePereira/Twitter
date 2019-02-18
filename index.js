var twitterText = document.querySelector ('#twitterText');
var tweetButton = document.querySelector ('#tweetButton');
var twitterList = document.querySelector ('#twitterList');


tweetButton.addEventListener('click', addTweet);

function addTweet(event) {
    var newLi = document.createElement('li');
    newLi.textContent = twitterText.value;
    twitterList.appendChild(newLi);
    twitterText.value = '';
    
}