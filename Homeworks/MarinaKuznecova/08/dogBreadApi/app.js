const apiURL = 'https://dog.ceo/api/';
const dogSelector = document.getElementById('dogSelector');
const dogImg = document.getElementById('dogImg');
let url = '';


function createBreedList() {
    let htmlDogs = data.map(function (breed, i) {
        // zeka MarinaKuznecova8 
        // этот кусок кода будет работать но мы могли бы избавиться от лишней проверки 
        // if (i === 0)
        // мы могли бы поступить следующим образом
        // перенести <option>Choose a dog breed</option> в html 
        // и дальше просто подставить все небходимые нам опции через +=
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
    // zeka MarinaKuznecova8 
    // замечательный кейс проверить что мы действительно что то выбрали
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