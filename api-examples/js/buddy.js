const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddies();
const displayBuddies = data => {
    // const buddies = document.getElementById('buddies');
    // buddies.innerText = data.results;
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `
        Id: ${buddy.id.name} ${buddy.id.value} 
        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email ${buddy.email}
        Gender: ${buddy.gender}
        cell: ${buddy.cell}
        Phone: ${buddy.phone}
        DOB: ${buddy.dob.date} ${buddy.dob.age}
        Location: ${buddy.location.street.name} ${buddy.location.city} ${buddy.location.country} ${buddy.location.postcode}`;
        buddiesDiv.appendChild(p);
    }
}