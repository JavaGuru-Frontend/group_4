const apiURL = 'https://dog.ceo/api/';
const dogSelector = document.getElementById('dogSelector');
const dogImg = document.getElementById('dogImg');
let url = '';


function createBreedList() {
    let htmlDogs = data.map(function (breed, i) {
        if (i === 0) {
            return `<option>Choose a dog breed</option>` +                 
                `<option value ="${breed.value}">${breed.name} </option>`; 
        } else {
            return `<option value ="${breed.value}">${breed.name} </option>`;
        }
    })
    dogSelector.innerHTML = htmlDogs.join('');
}

function renderDogData(data) {
    dogImg.innerHTML = `<img src='${data.message}'>`
}

function getBreedImg() {
    if (dogSelector.value !== 'Choose a dog breed') {                     
        url = apiURL + `breed/${dogSelector.value}/images/random`;        
        fetch(url)
            .then(response => response.json())
            .then(data => renderDogData(data))
            .catch(error => alert(error));

    } else {
        dogImg.innerHTML = '';
    }
}

createBreedList()
dogSelector.addEventListener('change', getBreedImg);