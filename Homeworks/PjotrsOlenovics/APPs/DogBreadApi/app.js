const dogSelector       = document.getElementById('dogSelector');
const dogImgSelector    = document.getElementById('dogImg');

let renderDogData = (data) => {
    data.forEach(breed => {
        dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`
    }) 
}

let renderDogImg = (data) => {
    dogImgSelector.innerHTML = `<img src='${data.message}'/>`
} 

let getDogImg = () =>  {
    const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;

    fetch(url)
        .then(rensponse => rensponse.json())
        .then(data => renderDogImg(data))
        .catch(error => alert(error))
}

renderDogData(data);
dogSelector.addEventListener('change', getDogImg)