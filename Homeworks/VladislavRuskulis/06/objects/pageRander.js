let elementName = document.getElementById('page-title');
let elementMain = document.getElementById('main');
let elementAbout = document.getElementById('top'); 
let elementPlaceAndWork = document.getElementById('pop');
let navigationLinks = document.getElementById('navig');
let elementContacts = document.getElementById('spot');
let tableHead = document.getElementById('thead');
let tableBody = document.getElementById('tbody');
let address  = document.getElementById('address');


elementName.innerText = pageData.header;
elementMain.innerText = pageData.section1.text;
elementAbout.innerText = pageData.section1.header;
elementPlaceAndWork.innerText = pageData.section2.header;
elementContacts.innerText = pageData.section3.header;




pageData.navigation.forEach(element => {
    navigationLinks.innerHTML += `
    <li class='navigation__item'>
       <a href='#${element.link}'>
       ${element.title}
       </a>
    </li>
    `;
});

pageData.section2.table.headers.forEach(header => {
    tableHead.getElementsByTagName("tr")[0].innerHTML +=
    `<th>${header}</th>`
});

pageData.section2.table.lines.forEach(line => {
   tableBody.innerHTML +=
   `<tr>
        <td>${line.name}</td>
        <td>${line.time}</td>
    </tr>`

});

pageData.section3.contacts.forEach(contact => {
    let text = 'My phone';
    if (contact.type === 'mailto') {
        text = 'My email'
    }
    if (contact.type === 'skype') {
        text = 'My skype'
    
    }
    address.innerHTML +=
    `${text}: <a href="${contact.type}:${contact.value}">${contact.value}</a><br>`

});





















