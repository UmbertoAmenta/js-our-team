// FUNCTIONS
function newCard (member) {
  const {name, role, email, img} = member
  const card = `
    <li>
      <div class="card">
        <div class="card-photo">
          <img src="${img}" alt="${name}">
        </div>
        <div class="card-info">
          <div class="card-name">${name}</div>
          <div class="card-role">${role}</div>
          <div class="card-email">${email}</div>
        </div>
      </div>
    </li>
  `
  return card
}


// VARIABLES
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
]


// DOM ELEMENTS
const cardListDom = document.getElementById("card-list")


// STAMP IN HTML
let cards = ""
for (let i = 0; i < teamMembers.length; i++) {
  cards += newCard(teamMembers[i])
}

cardListDom.innerHTML = cards