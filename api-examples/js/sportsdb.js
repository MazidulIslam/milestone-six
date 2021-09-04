const loadTeams = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.teams))
        // .then(data => displayTeams(data.teams))
        .catch(error => console.log(error));
}

const displayTeams = teams => {
    // console.log(teams);
    const teamContainer = document.getElementById('team-container');
    teamContainer.textContent = '';
    // for (const team of teams) {
    // const div = document.createElement('div');
    // div.classList.add('card');
    // div.innerHTML = `<img src="${team.strTeamBadge}" class="card-img-top w-25" alt="...">
    //         <div class="card-body">
    //             <h3 class="card-title">${team.strAlternate}</h3>
    //             <h5 class="card-title">${team.strTeam}</h5>
    //             <h5 class="card-title">${team.strLeague}</h5>
    //             <p class="card-text">${team.strDescriptionPT}</p>
    //             <a href="${team.strWebsite}" class="btn btn-primary">Website</a>
    //             <a href="${team.strYoutube}" class="btn btn-primary">Youtube</a>
    //         </div>
    // `;
    // teamContainer.appendChild(div);
    // }
    teams.forEach(team => {
        console.log(parseInt(team.idTeam));
        const divParent = document.createElement('div');
        divParent.classList.add('col');
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<img src="${team.strTeamBadge}" class="card-img-top w-25" alt="...">
            <div class="card-body">
                <h3 class="card-title">${team.strAlternate}</h3>
                <h5 class="card-title">${team.strTeam}</h5>
                <h5 class="card-title">${team.strLeague}</h5>
                <p class="card-text">${team.strDescriptionPT}</p>
                <button onclick="loadSingleTeam(${parseInt(team.idTeam)})" class="btn btn-primary">Team Details</button>
            </div>
    `;
        teamContainer.appendChild(divParent);
        divParent.appendChild(div);


    })
    
        

}
const loadSingleTeam = async team => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${team}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displaySingleTeam(data.teams);
}

const displaySingleTeam = team => {
    const singleContainer = document.getElementById('single-container');
    singleContainer.textContent = '';
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<img src="${team.strTeamBadge}" class="card-img-top w-25" alt="...">
            <div class="card-body">
                <h2 class="card-title">${team.strAlternate}</h2>
                <h5 class="card-title">${team.idTeam}</h5>
                <h5 class="card-title">${team.strTeam}</h5>
                <h5 class="card-title">${team.strStadium}</h5>
                <h5 class="card-title">${team.strLeague}</h5>
                <p class="card-text">${team.strDescriptionPT.slice(0, 200)}</p>
                <a href="${team.strWebsite}" class="btn btn-primary">Website</a>
                <a href="${team.strYoutube}" class="btn btn-primary">Youtube</a>
            </div>
    `;
        singleContainer.appendChild(div);

}