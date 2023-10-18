//creare l'array di oggetti
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO', 
        foto: './img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor', 
        foto: './img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager', 
        foto: './img/walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager', 
        foto: './img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer', 
        foto: './img/scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer', 
        foto: './img/barbara-ramos-graphic-designer.jpg'
    }
]

//console.log(team)
//Stampare per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
const rowDomElement = document.querySelector('.row');

for(let i = 0; i < team.length; i++) {
    const currentMember = team[i] 
    console.log(currentMember.nome)
    console.log(currentMember.ruolo)
    console.log(currentMember.foto)

    const currentIMG = currentMember.foto;
    const htmlString = `
    <div class="col-4">
        <div class="card">
            <div class="img-wrapper">
                <img class="img" src="${currentIMG}">
            </div>
            <p class="text">${currentMember.nome}</p>
            <p class="text">${currentMember.ruolo}</p>
        <div class="card">
    </div>
    `

    rowDomElement.innerHTML += htmlString
}

// - PER OGNI immagine, creare un div che la contenga e inserirlo nell'html

