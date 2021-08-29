// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//     .then(json => console.log(json))

// function loadData() {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//     .then(json => console.log(json))
// }

function newLoadData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respose => respose.json())
    .then(data => console.log(data))
}

function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
  // this will call from displayUsers function 
}

function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
  .then(data => console.log(data))
}
// if any function calls then we don't need click any button to fetch data 
// loadPosts();

function displayUsers(data) {
  const ul = document.getElementById('users');
  for (const user of data) {
    const li = document.createElement('li');
    li.innerText = `Id:  ${user.id}  name:  ${user.name} email:  ${user.email}`;
    ul.appendChild(li);
  }
}




// very important 