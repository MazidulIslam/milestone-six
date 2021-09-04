const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data));
}

const displayQuote = (data) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.style.border = '2px solid red';
    quoteElement.style.borderRadius = '10px';
    quoteElement.style.margin = '20px';
    quoteElement.style.padding = '20px';
    quoteElement.style.fontSize = '35px';
    quoteElement.innerText = data.quote;
}


// now search random user api on web 