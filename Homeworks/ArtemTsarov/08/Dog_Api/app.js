console.log("Start")
let select;

const fetchDoggoBreeds = async () => {

  const data = await fetch('https://dog.ceo/api/breed/hound/list').then(data => data.json());
  populateDoggoSelect(data);
}

const populateDoggoSelect = (breeds) => {
  select = document.querySelector('.breed-select');
  const breedOptions = breeds.map(breed => {
    const option = document.createElement('option');
    option.text = breed.name;
    option.value = breed.id;
    return option;
  })

  breedOptions.forEach(breedOption => {
    select.appendChild(breedOption);
  })
}

const fillDoggoImage = (imageUrl) => {
  document.querySelector('#doggo-image').setAttribute('src', imageUrl);

}

const createDescriptionEntry = ({label, value}) => {
  const descriptionTerm = document.createElement('dt');
  descriptionTerm.textContent = label;
  const descriptionValue = document.createElement('dd');
  descriptionValue.textContent = value;
  document.querySelector('#doggo-description').appendChild(descriptionTerm);
  document.querySelector('#doggo-description').appendChild(descriptionValue);
}

const clearDoggoDescription = () => {
  const descritpionElement = document.querySelector('#doggo-description');

  while(descritpionElement.firstChild) {
    descritpionElement.removeChild(descritpionElement.firstChild);
  }
}

const fillDoggoDescription = ({bred_for: name}) => {
  clearDoggoDescription();
  createDescriptionEntry({
    label: 'Name',
    value: name
  })
}

const getDogByBreed = async (breedId) => {
  const [data] = await fetch('https://dog.ceo/api/breed/hound/images' + breedId).then((data => data.json()))
  const {url: imageUrl, breeds} = data;
  console.log(breeds[0]);
  fillDoggoImage(imageUrl);
  fillDoggoDescription(breeds[0]);
}


const changeDoggo = () => {
  getDogByBreed(event.target.value);
}

fetchDoggoBreeds();