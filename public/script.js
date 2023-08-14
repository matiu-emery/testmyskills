let xp = 0
let health = 100
let gold = 100
let patuOnainei = 0
let whawhai
let monsterHealth = 0 // Initialize monsterHealth
let inventory = ['Rakau ']
let monsterHealthText

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
  monsterHealthText = document.querySelector('#monsterHealth')

  // buttons Initialized
  button1.onclick = HaereKiTeToa
  button2.onclick = HaereKiTeAna
  button3.onclick = WhawhaiTarakona
})

//weapon list
const patu = [
  {
    ingoa: 'Rakau',
    mana: 5
  },
  {
    ingoa: 'Hoari',
    mana: 30
  },
  {
    ingoa: 'Hama kuku',
    mana: 50
  },
  {
    ingoa: 'Hoari Roa',
    mana: 100
  },
]

const taniwha = [
  {
    ingoa: 'Pirawai',
    taumata: 2,
    hauora: 15
  },
  {
    ingoa: 'Kararehe',
    taumata: 8,
    hauora: 60
  },
  {
    ingoa: 'Tarakona',
    taumata: 20,
    hauora: 300
  },
]

//locations name etc
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
  },
  {
    ingoa: 'Whawhai',
    'button text': ['Whakaeke', 'Karohia', 'Oma'],
    'button functions': [Whakaeke, Karohia, HokiKiTeTaone],
    text: 'Kei te whawhai koe he taniwha',
  },
  {
    ingoa: 'Patua Taniwha',
    'button text': ['Haere ki te taone tapawha', 'Haere ki te taone tapawha', 'Haere ki te taone tapawha'],
    'button functions': [HokiKiTeTaone, HokiKiTeTaone, HokiKiTeTaone],
    text: 'Ka tangi te taniwha "AHHHHHHHHHHHH!!" a ka mate. I whiwhi koe i te wheako me i rapu koe i te koura',
  },
  {
    ingoa: 'I ngaro koe!!',
    'button text': ['TUKURUA?','TUKURUA?','TUKURUA?'],
    'button functions': [TimataAno,TimataAno,TimataAno],
    text: 'I Mate Koe!!.💀👻',
  },
  {
    ingoa: 'I toa koe!!',
    'button text': ['TUKURUA?','TUKURUA?','TUKURUA?'],
    'button functions': [TimataAno,TimataAno,TimataAno],
    text: 'I hinga koe te Tarakona!! I TOA KOE TE KEMU!!👊💪🎉🎉',
  }
]

// update
function whakahou(waahi) {
  monsterStats.style.display = 'none'
  button1.innerText = waahi['button text'][0]
  button2.innerText = waahi['button text'][1]
  button3.innerText = waahi['button text'][2]

  button1.onclick = waahi['button functions'][0]
  button2.onclick = waahi['button functions'][1]
  button3.onclick = waahi['button functions'][2]

  text.innerText = waahi.text
}

//back to town
function HokiKiTeTaone() {
  whakahou(ngaWaahi[0])
}

// go store
function HaereKiTeToa() {
  whakahou(ngaWaahi[1])
}

// go to cave
function HaereKiTeAna() {
  whakahou(ngaWaahi[2])
}

//Buying health 
function HokoHauora() {
  if(gold >= 10)
  {
  gold -= 10
  health += 10
  goldText.innerText = gold
  healthText.innerText = health
  text.innerText = 'I hoko koe te Hauora'
  }
  else {
    text.innerText = 'Kaore koe i te nui o te koura hei hoko hauora'
  }
}

//Buying weapon 
function HokoPatu() {
  if (patuOnainei < patu.length - 1) {
    if (gold >= 30) {
      gold -= 30
      patuOnainei ++
      goldText.innerText = gold
      let patuHou = patu[patuOnainei].ingoa + ' '
      text.innerText = 'I hoko koe he ' + patuHou + '.'
      inventory.push(patuHou)
      text.innerText += ' Kei roto i to rarangi ingoa kei a koe ' + inventory
    }
    else {
      text.innerText = 'Kaore koe i te nui o te koura hei hoko patu'
    }
  }
  else {
    text.innerText = 'Kei a koe ke te patu tino kaha.'
    button2.innerText = 'Hokona  atu he patu mo te 15 koura'
    button2.onclick = HokonaAtuToPatu
  }
}

// sell weapon
function HokonaAtuToPatu() {
  if (inventory.length > 1 ) {
    gold += 15
    goldText.innerText = gold
    let patuOnainei = inventory.shift()
    text.innerText = 'I hoko atu koe te  ' + patuOnainei + '.'
    text.innerText = ' Kei roto i to rarangi ingoa kei a koe ' + inventory
  }
  else {
    text.innerText = 'Kaua e hoko atu to patu anake '
  }
}

//fight slime 
function WhawhaiPirawai() {
  whawhai = 0
  HaereWhawhai()
}

//fight beast 
function WhawhaiKararehe() {
  whawhai = 1
  HaereWhawhai()
}

//fight dragon 
function WhawhaiTarakona() {
  whawhai = 2
  HaereWhawhai()
}

// go fight
function HaereWhawhai() {
  whakahou(ngaWaahi[3])
  monsterHealth = taniwha[whawhai].hauora
  monsterHealthText.innerText = monsterHealth // Corrected line
  monsterStats.style.display = 'block'
  monsterName.textContent = taniwha[whawhai].ingoa
}

//Attack
function Whakaeke() {
  text.innerText = 'I whakaeke te ' + taniwha[whawhai].ingoa;
  text.innerText += ' I whakaeke koe me to ' + patu[patuOnainei].ingoa + '.'
  health -= taniwha[whawhai].taumata
  monsterHealth -= patu[patuOnainei].mana + Math.floor(Math.random() * xp) + 1
  healthText.innerText = health.toString()  // Convert to string
  monsterHealthText.innerText = monsterHealth.toString() // Convert to string
  if (health <= 0) {
    Ngaro()
  } else if (monsterHealth <= 0) {
    whawhai === 2 ? ToaKemu() : HingaTaniwha()
  }
}


//Dodge
function Karohia() {
  text.innerText = 'I korohia koe te whakaeke o te ' + taniwha[whawhai].ingoa + '.'

}

//Monster defeated
function HingaTaniwha() {
  gold += Math.floor(taniwha[whawhai].taumata * 6.7)
  xp += taniwha[whawhai].taumata
  goldText.innerText = gold
  xpText.innerText = xp
  whakahou(ngaWaahi[4])
}

//Lose
function Ngaro() {
  whakahou(ngaWaahi[5])
}

// won game
function ToaKemu() {
  whakahou(ngaWaahi[6])
}

// Restart Game
function TimataAno() {
  xp = 0
  health = 100
  gold = 100
  patuOnainei = 0
  inventory = ['Rakau ']
  goldText.innerText = gold
  healthText.innerText = health
  xpText.innerText = xp
  HokiKiTeTaone()
}


