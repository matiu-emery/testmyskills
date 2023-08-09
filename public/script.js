let xp = 0
let health = 100
let gold = 50
let currentWeapon = 0
let fighting
let monsterHealth = 0 // Initialize monsterHealth
let inventory = ['stick']

// Initialize buttons
document.addEventListener('DOMContentLoaded', () => {
  const button1 = document.querySelector('#button1')
  const button2 = document.querySelector('#button2')
  const button3 = document.querySelector('#button3')
  const text = document.querySelector('#text')
  const xpText = document.querySelector('#xpText')
  const healthText = document.querySelector('#healthText') 
  const goldText = document.querySelector('#goldText')
  const monsterStats = document.querySelector('#monsterStats') 
  const monsterNameText = document.querySelector('#monsterName')
  const monsterHealthText = document.querySelector('#monsterHealth')
  
// buttons Initialized
  button1.onclick = goStore
  button2.onclick = goCave
  button3.onclick = fightDragon
})

//Haere ki te toa
function goStore(){
  console.log("Going to store")
  button1.innerText = 'Hoko 10 hauora (10 koura)'
  button2.innerText = 'Hoko patu (30 koura)'
  button3.innerText = 'Haere ki te taone tapawha'

  button1.onclick = HokoHauora 
  button2.onclick = HokoPatu   
  button3.onclick = HokiKiTeTaone 

  text.innerText = 'I kuhu koe te' 
}

//Haere ki te ana
function goCave(){
  console.log("Going to cave")
}

//Whawhai tarakona
function fightDragon(){
  console.log("Fighting dragon")
}

function HokoHauora(){
 
}

function HokoPatu(){
  console.log("Fighting dragon")
}

function HokiKiTeTaone(){
  console.log("Fighting dragon")
}