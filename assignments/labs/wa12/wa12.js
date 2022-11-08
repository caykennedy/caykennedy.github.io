const minusbutton = document.querySelector('.subtract-button').addEventListener('click', subtract);
const plusbutton = document.querySelector('.add-button').addEventListener('click', add);
const submitbutton = document.querySelector('.submit-button').addEventListener('click', submit);
const resetbutton = document.querySelector('.reset-button').addEventListener('click', reset);

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

function subtract()
{
    if (outputInt > 0)
    {
        outputInt -= 1;
        output.textContent = outputInt;
    }

}

function add()
{
    if (outputInt < 9999999999) 
    {
        outputInt +=1;
        output.textContent = outputInt;
    }
}

function reset()
{
    outputInt = 0;
    output.textContent = outputInt;
}

function submit()
{
    alert(output.textContent);
}
