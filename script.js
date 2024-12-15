// FUNCTIONS
function getnewCard (member) {
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
      
function getFullTeam() {
  let cards = ""
  for (let i = 0; i < teamMembers.length; i++) {
    cards += getnewCard(teamMembers[i])
  }
  cardListDom.innerHTML = cards
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
const addCardFormDom = document.getElementById("add-card-form")
const nameDom = document.getElementById("name")
const roleDom = document.getElementById("role")
const emailDom = document.getElementById("email")
const imgDom = document.getElementById("img")


// STAMP IN HTML
getFullTeam()


// DOM EVENTS
addCardFormDom.addEventListener("submit", function(event) {
  event.preventDefault()

  const name = nameDom.value
  const role = roleDom.value
  const email = emailDom.value
  const img = imgDom.value /* non va con input-file*/

  const newCard = {
    name,
    role,
    email,
    img,
  }

  teamMembers.push(newCard)
  getFullTeam()

  nameDom.value = ""
  roleDom.value = ""
  emailDom.value = ""
  imgDom.value = ""
})