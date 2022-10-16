import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

global.owner = 
 [
  ['+92 347 0027813', 'Ahmad Ali'],
  ['+27 73 995 8612'],
  ['+92 319 1089077']
]



 // ['923470027813', '27739958612', '923191089077']

  // [number, dia creator/owner?, dia developer?]
// Put your number here
global.mods = ['923470027813', '27739958612', '923191089077'] // Want some help?
global.prems = ['923470027813', '27739958612', '923191089077'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  violetics: 'https://violetics.pw',
  rrul: 'https://api-rull.herokuapp.com',
  hadi: 'http://hadi-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://violetics.pw': 'beta'
}

/* global.thumbnailUrl = [
  'https://i.ibb.co/cw886gK/b69bd948e975.jpg', 'https://i.ibb.co/cw886gK/b69bd948e975.jpg',
  'https://i.ibb.co/cw886gK/b69bd948e975.jpg', 'https://i.ibb.co/cw886gK/b69bd948e975.jpg',
  'https://i.ibb.co/cw886gK/b69bd948e975.jpg', 'https://i.ibb.co/cw886gK/b69bd948e975.jpg',
  'https://i.ibb.co/cw886gK/b69bd948e975.jpg', 'https://i.ibb.co/cw886gK/b69bd948e975.jpg',
  'https://i.ibb.co/cw886gK/b69bd948e975.jpg', 'https://i.ibb.co/cw886gK/b69bd948e975.jpg'
]
*/

// Sticker WM
global.packname = `\t\t「 Cʀᴇᴀᴛᴇᴅ Bʏ Ikratos 」\n\t\t「 IG: itx_ahmad.ali」\n\t\t「 SC: github.com/xIKRATOSx」\t\t\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`
global.author = 'Ahmad Ali'
global.thumb = readFileSync('./me.png')
global.thumb2 = readFileSync('./me2.jpeg')
global.multiplier = 69 // The higher, The harder levelup

//Text here
global.me = 'Cʀᴇᴀᴛᴇᴅ Bʏ Ikratos - 2022'
global.str = '-------------'
global.l = '「'
global.r = '」'
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...```'
global.eror = '```404 ᴇʀʀᴏʀ```'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
