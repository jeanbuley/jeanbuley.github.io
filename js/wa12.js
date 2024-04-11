const btn = document.querySelector('#js-new-quote');
btn.addEventListener('click',getQuote);

const btn2 = document.querySelector('#js-tweet');
btn2.addEventListener('click',displayAnswer);

const btn3 = document.querySelector('#js-line');
btn3.addEventListener('click', displayLine);

const answerText = document.querySelector('#js-answer-text');

const endpoint = 'https://poetrydb.org/author,random/Poe;1';

let answer = '';
let line = '';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json[0]['title']);
        displayQuote(json[0]['title']);
        console.log(json[0]['linecount']);
        answer = (json[0]['linecount']);
        console.log(json[0]["lines"][0]);
        line = (json[0]['lines'][0]);
        answerText.textContent = '';
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new info');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer() {
    answerText.textContent = answer;
}

function displayLine() {
    answerText.textContent = line;
}

getQuote();