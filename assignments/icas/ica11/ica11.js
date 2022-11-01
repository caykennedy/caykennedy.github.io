const qButton = document.querySelector('.new-quote');
qButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
let quoteArea = document.querySelector('.quote-text');

async function getQuote()
{

    let text = await fetch(endpoint);
    let response = await text.text();
    //.then(text=>text.text());
    //.then()

    quoteArea.textContent = response['message'];

    
}