const checks = document.getElementsByClassName('check');

const output = document.querySelector('.output');
const confirmButton= document.querySelector('.confirm-button');
const resetButton = document.querySelector('.reset-button');
const submitButton = document.querySelector('.submit');

resetButton.addEventListener('click', reset);
confirmButton.addEventListener('click',confirm);
submitButton.addEventListener('click', submit);


function confirm()
{
    let boxString = checkIfChecked();
    if (output.textContent === '(waiting for input.)')
    {
        output.textContent = '';
    }

    if (boxString === '2581114')
    {
        output.textContent += '1';
        resetBoxes();
    }
    else if (boxString === '123678910131415')
    {
        output.textContent += '2';
        resetBoxes();
    }  
    else if (boxString === '12368912131415') 
    {
        output.textContent += '3';
        resetBoxes();
    }
    else if (boxString === '13467891215') 
    {
        output.textContent += '4';
        resetBoxes();
    }
    else if (boxString === '123478912131415') 
    {
        output.textContent += '5';
        resetBoxes();
    }
    else if (boxString === '12347891012131415') 
    {
        output.textContent += '6';
        resetBoxes();
    }
    else if (boxString === '123691215') 
    {
        output.textContent += '7';
        resetBoxes();
    }
    else if (boxString === '123467891012131415') 
    {
        output.textContent += '8';
        resetBoxes();
    }
    else if (boxString === '1234678912131415') 
    {
        output.textContent += '9';
        resetBoxes();
    }
    else if (boxString === '12346791012131415') 
    {
        output.textContent += '0';
        resetBoxes();
    }
    else
    {
        alert('Thats not a valid number!');
        reset();
    }
    
}

function reset()
{
    resetBoxes();
    output.textContent = '(waiting for input.)';
}

function resetBoxes()
{
    for (let i = 0; i < 15; i++)
    {
        if (checks.item(i).checked)
        {
            checks.item(i).checked = false;
        }
    }
}

function submit()
{
    if (output.textContent != '(waiting for input.)')
    {
        alert(output.textContent);
    }
    else
    {
        alert('Thats not your number.');
    }
    reset();
    
}

function checkIfChecked()
{
    let boxString = '';
    for (let i = 0; i < 15; i++)
    {
        if (checks.item(i).checked)
        {
            console.log(checks.item(i).checked);
            let num = i+1;
            console.log(num);
            boxString += num;
        }
    }
    console.log(boxString);
    return boxString;
}
