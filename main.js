function generate() {
    let userSearch = document.querySelector('#cocktailSearch').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearch}`)
    .then(res => res.json())
    .then(data => {
        let randomNum = Math.floor(Math.random() * data.drinks.length + 1)
        console.log(data.drinks[randomNum])
        document.querySelector('img').src = data.drinks[randomNum].strDrinkThumb
        document.querySelector('#name').innerText = data.drinks[randomNum].strDrink
        document.querySelector('#directions').innerHTML = data.drinks[randomNum].strInstructions
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })
}

document.querySelector('#search').addEventListener('click', generate)
