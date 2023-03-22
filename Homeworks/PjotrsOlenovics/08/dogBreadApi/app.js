const dogSelector = document.querySelector('#dog-selector');
const dogImage = document.querySelector('#dog-image');

function renderBreeds() {
  for (const breed of data) {
    dogSelector.innerHTML += `<option value="${breed.value}">${breed.name}</option>`;
  }
}

async function handleChange() {
  const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;
  const response = await fetch(url);
  const data = await response.json();
  dogImage.innerHTML = `<img src="${data.message}" alt="dog"/>`;
}

dogSelector.addEventListener('change', handleChange);

renderBreeds();