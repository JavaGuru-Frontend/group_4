
fetch("https://randomuser.me/api/");


fetch("https://randomuser.me/api/?results=50");

fetch("https://randomuser.me/api/?gender=female")

fetch("https://randomuser.me/api/?results=50&gender=female")

const apiURL = "https://randomuser.me/api/";

const submitBtn = document.getElementById("submit-btn");
const personGrid = document.getElementById("person-grid");

const genderInput = document.getElementById("gender");
const resultsInput = document.getElementById("results");
const nationalityInput = document.getElementById("nationality");

const createPersonCard = () => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("person-card");

    return cardContainer
}
const createImg = (data) => {
    const imgEl = document.createElement("img");
    imgEl.src = data.picture.large;
    imgEl.classList.add("person-image");

    return imgEl
}

const createFullName = (data) => {
    const fullNameEl = document.createElement("p");
    fullNameEl.classList.add("person-name");
    fullNameEl.innerHTML = `${data.name.first} ${data.name.last}`;
    
    return fullNameEl   
}

const createEmail = (data) => {
    const emailEl = document.createElement("a");
    emailEl.classList.add("person-email")
    // tā kā esam izveidojuši <a> elementu, varam tam pievienot href atribūtu un norādīt tajā epasta adresi.
    emailEl.href = `mailto:${data.email}`;
    emailEl.innerHTML = data.email;

    return emailEl
}

const createNationality = (data) => {
    const nationalityEl = document.createElement("p");
    nationalityEl.classList.add("person-nationality");
    nationalityEl.innerHTML = `Country: ${data.nat}`;

    return nationalityEl
}

const renderUserData = (data) => {
    const personCard = createPersonCard();
    const img = createImg(data)
    const fullName = createFullName(data);
    const email = createEmail(data);
    const nationality = createNationality(data);

    personCard.append(img);
    personCard.append(fullName);
    personCard.append(nationality);
    personCard.append(email);

    personGrid.append(personCard);
}


const fetchPersonData = () => { 
    const url = new URL(apiURL);

    const queryParams = {
        gender: genderInput.value,
        results: resultsInput.value,
        nationality: nationalityInput.value
    }

    const searchParams = new URLSearchParams(queryParams).toString();
    url.search = searchParams;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            personGrid.innerHTML = "";
            data.results.forEach((result) => renderUserData(result))
        })
        .catch((error) => alert(error));
}
submitBtn.addEventListener("click", fetchPersonData);





{/* <div class="person-card">
    <img src="https://randomuser.me/api/portraits/women/34.jpg" class="person-image">
    <p class="person-name">Sybille Volkmann</p>
    <p class="person-nationality">Country: DE</p>
    <a class="person-email" href="mailto:sybille.volkmann@example.com">sybille.volkmann@example.com</a>
</div> */}