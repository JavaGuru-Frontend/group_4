const dogSelector = document.getElementById("dogSelector");
const dogImg = document.getElementById("dogImg")

let renderList = (data) => {
    data.forEach(breed => {
        let holder = `<option value=${breed.value}>${breed.name}</option>`
        dogSelector.innerHTML += holder
    });
}

let renderDogData = (data) => {
    dogImg.innerHTML = `<img src="${data.message}"></img>`
}

let getDogImg = () => {
    let link = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`
    
    fetch(link)
                .then(response => response.json())
                .then(data => renderDogData(data))
                .catch(error => alert(error));
}
renderList(data);
addEventListener('change', getDogImg)