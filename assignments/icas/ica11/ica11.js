const qButton = document.querySelector('.new-quote');
qButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
let quoteArea = document.querySelector('.quote-text');

function getQuote()
{

    let text = fetch(endpoint)
    .then(response=>response.text())
    .then(text=>displayQuote(text))
    
}

function displayQuote(quoteText)
{
    let qt = JSON.parse(quoteText);
    quoteArea.textContent = qt['message'];
}