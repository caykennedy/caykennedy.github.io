const textArea = document.querySelector(".words");
const imgArea = document.querySelector(".image");
const allNew = document.querySelector(".all-new");
const newText = document.querySelector(".new-text");
const newGif = document.querySelector(".new-image");


const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Any?safe-mode';
const dogEndpoint = 'https://random.dog/woof.json';

allNew.addEventListener('click', generateText);
allNew.addEventListener('click', generateImg);

newText.addEventListener('click', generateText);

newGif.addEventListener('click', generateImg);

function generateText()
{
    let text = fetch(jokeEndpoint)
    .then(response=>response.text())
    .then(text=>displayText(text))
}

function displayText(textWanted)
{
    let joke = JSON.parse(textWanted);
    if (joke['type'] == 'twopart')
    {
        textArea.textContent = joke['setup'] + '\n' + joke['delivery'];
    }
    else
    {
        textArea.textContent = joke['joke'];
    } 
}


function generateImg()
{
    let text = fetch(dogEndpoint)
    .then(response=>response.text())
    .then(text=>displayImg(text))
}


function displayImg(imgText)
{
    let rawText = JSON.parse(imgText);
    imgArea.setAttribute('src', rawText['url']);
}

generateText();
generateImg();