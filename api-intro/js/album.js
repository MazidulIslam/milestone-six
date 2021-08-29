function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}
loadAlbums();
function displayAlbums(albums) {
    const albumDiv = document.getElementById('album');
    for (const album of albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumDiv.appendChild(p);
    }
}