let paragraph = document.querySelector('p');
let heading = document.querySelector('h3');
let body = document.querySelector('body')

paragraph.addEventListener('click', promptResponse);
body.addEventListener('keydown', spin);
body.addEventListener('keyup',stopspin);

function promptResponse(){
    prompt('What is your name?');
}

function spin(){

    heading.style.transform += "rotate(10deg)";
}

function stopspin(){
    heading.style.transform += "rotate(0deg)";
}
