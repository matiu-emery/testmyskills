let xp = 0
let health = 100
let gold = 50
let currentWeapon = 0
let fighting
let monsterHealth = 0 // Initialize monsterHealth
let inventory = ['stick']

// Define ngaWaahi before using it
const ngaWaahi = [
  {
    ingoa: 'Toene tapawha',
    'button text': ['Haere ki te toa', 'Haere ki te ana', 'Whawhai te tarakana'],
    'button functions': [HaereKiTeToa, HaereKiTeAna, WhawhaiTarakona],
    text: 'Kei te tapawha taone koe, ka kite koe i tetahi tohu e kii ana he "Toa"',
  },
  {
    ingoa: 'Toa',
    'button text': ['Hoko 10 hauora (10 koura)', 'Hoko patu (30 koura)', 'Haere ki te taone tapawha'],
    'button functions': [HokoHauora, HokoPatu, HokiKiTeTaone],
    text: 'I kuhu koe te toa',
  },
  {
    ingoa: 'Ana',
    'button text': ['Whawhai parawai', 'Whawhai kararehe', 'Haere ki te taone tapawha'],
    'button functions': [WhawhaiPirawai, WhawhaiKararehe, HokiKiTeTaone],
    text: 'Ka tomo koe ki te ana. Ka kite koe i etahi taniwha',
  }
]

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
  button1.onclick = HaereKiTeToa
  button2.onclick = HaereKiTeAna
  button3.onclick = WhawhaiTarakona
})

function whakahou(waahi) {
  button1.innerText = waahi['button text'][0]
  button2.innerText = waahi['button text'][1]
  button3.innerText = waahi['button text'][2]

  button1.onclick = waahi['button functions'][0]
  button2.onclick = waahi['button functions'][1]
  button3.onclick = waahi['button functions'][2]

  text.innerText = waahi.text
}

function HokiKiTeTaone() {
  whakahou(ngaWaahi[0])
}

function HaereKiTeToa() {
  whakahou(ngaWaahi[1])
}

function HaereKiTeAna() {
  whakahou(ngaWaahi[2])
}

function WhawhaiPirawai() {
  
}

function WhawhaiKararehe() {
  
}

function WhawhaiTarakona() {
  console.log('Fighting dragon')
}

function HokoHauora() {
  gold = gold - 10
  health = health + 10
  text.innerText = 'I hoko koe te Hauora'
}

function HokoPatu() {
  console.log('I hoko koe he patu')
  text.innerText = 'I hoko koe he patu'
}
