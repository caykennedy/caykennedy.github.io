let paragraph = document.querySelector('p');
let heading = document.querySelector('h3');

paragraph.addEventListener('click', promptResponse);
heading.addEventListener('mouseover', spin);

function promptResponse(){
    prompt('What is your name?');
}

function spin(){

    heading.style.transform += "rotate(10deg)";
}
