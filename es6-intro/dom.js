document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '2px solid red';
    container.style.padding = '15px';
})

function addBackgroundColor(){
const friends = document.getElementsByClassName('friend');
for (const friend of friends) {
    friend.style.backgroundColor = 'coral';
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">new friend </h3>
    <p>Odio quas incidunt provident magni?</p>
    `;
    container.appendChild(friendDiv);
})

document.getElementsByClassName