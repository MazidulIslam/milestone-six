const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data 
    searchField.value = '';
    // load data 
    if (searchText == '') {
        alert('please write something')
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // fetch(url)
    //     .then(res => res.json())
    //     // .then(data => console.log(data.meals));
    //     .then(data => displaySearchResults(data.meals));
        try {
            const res = await fetch(url);
        const data = await res.json();
        displaySearchResults(data.meals);
        }
        catch (error) {
            console.log(error);
        }
    }
    
}

const displaySearchResults = meals => {
    const searchResult = document.getElementById('search-result');
    // this first two methods are not recommended for clear pevious search resut 
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if (meals.length == 0) {
        alert('Please enter relevent search keyword')
        // const div2 = document.createElement('div');
        // div.innerHTML = `
        // <h2>No Result Found</h2>`;
        // searchResult.appendChild(div2);
    } else {
            meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>`;
            searchResult.appendChild(div);
        })
    }
    
}

const loadMealDetail = async mealId => {
    // const url = ;
    // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]));
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
}
const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>`;
    mealDetails.appendChild(div);
}

// almost similar to fetch 