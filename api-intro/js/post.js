function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
    .then(posts => displayPost(posts))
}
loadPosts();
function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post);
        const div = document.createElement('div');
        div.style.border = '2px solid red';
        div.style.borderRadius = '10px';
        // div.style.boxShadow = '10px';
        div.style.margin = '4px';
        div.style.padding = '14px';
        div.classList.add('post');
        div.innerHTML = `
        <h1 class="title">${post.title}</h1>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div);
    }
}

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'my new post',
            body: 'this is my  post',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
    .then(data => console.log(data))
}

// get vs post for interview 

// Get, Post, Patch, Delete, Crud, Get Vs Post
