const genderSelector = document.getElementById('gender');
const resultsInput = document.getElementById('results');
const nationalitySelector = document.getElementById('nationality');
const submitButton = document.getElementById('submit-btn');
const personGrid = document.getElementById('person-grid');

submitButton.addEventListener('click', () => {
  const gender = genderSelector.value;
  const results = resultsInput.value;
  const nationality = nationalitySelector.value;

  fetch(`https://randomuser.me/api/?gender=${gender}&results=${results}&nat=${nationality}`)
    .then(response => response.json())
    .then(data => {
      let html = '';
      data.results.forEach(person => {
        const { name, email, phone, picture } = person;
        html += `
          <div class="person-card">
            <img src="${picture.medium}" alt="${name.first} ${name.last}">
            <h3>${name.first} ${name.last}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
          </div>
        `;
      });
      personGrid.innerHTML = html;
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
    });
});
