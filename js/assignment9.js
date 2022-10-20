const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];

/* Declaring the alternative text for each image file */
const altText = ['Indiana Jones the Leopard Gecko sitting on a log', 'Lucy the crested gecko about to jump you','Daphne the leopard gecko looking displeased','The Rat about to talk shit about you','Craig the crested gecko having no thoughts, as per usual'];

/* Looping through images */

for (let i = 0; i < 5; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', './images/'+imageArray[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    let src = newImage.getAttribute('src');
    let alt = newImage.getAttribute('alt');
    newImage.addEventListener('click', makeDisplay);
    function makeDisplay()
    {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
        displayedImage.setAttribute('alt', newImage.getAttribute('alt'))
    }
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',darken);

function darken()
{
    if (btn.getAttribute('class')=== 'dark')
    {
        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.textContent='Lighten';
    }
    else
    {
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.textContent = 'Darken';
    }
}