const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => countriesDisplay(data));
}
loadCountries();
const countriesDisplay = countries => {
    const countriesDiv = document.getElementById('countries');
    
    // for (const country of countries) {
    //     ul.innerText = country.name;
    //     countriesDiv.appendChild(ul);
    // }
    countries.forEach(country => {
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3 style="display: inline">${country.name}</h3><img width="30px" src="${country.flag}">
        <p>${country.capital}</p>
        
        <button onclick="loadCountryByName('${country.name}')">Show Details</button>`;
        // here ${country.name} is bind with '' because the of this dynamic variable or object is String. so when we want to get string we must need to keep the variable inside 'single quote'
        // .
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    });

}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
    .then(data => displayCourtryDetail(data[0]))
}

const displayCourtryDetail = country => {
    const countryDetailDiv = document.getElementById('country-detail');
    countryDetailDiv.innerHTML = `
    <h5>${country.name}</h5>
    <img width="200px" src="${country.flag}">`

}