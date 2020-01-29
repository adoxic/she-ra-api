//character page to array 
/* eslint-disable  no-console */

const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = 'https://she-raandtheprincessesofpower.fandom.com';
const url = `${baseUrl}/wiki/Category:Characters`;

axios(url)
  .then(response => {
    let characterArray = [];
    const html = response.data;
    const $ = cheerio.load(html);
    
    const characters = $('a.category-page__member-link');
    for(let i = 0; i < characters.length; i++) {
      const characterObj = characters[i];
      if(!characterObj.attribs.href.includes('Category') 
      && !characterObj.attribs.href.includes('Characters') 
      && !characterObj.attribs.href.includes('The_Rebel') 
      && !characterObj.attribs.href.includes('People_Groups')
      && !characterObj.attribs.href.includes('Horde_Armada')
      && !characterObj.attribs.href.includes('First_Ones')
      ) {
        characterArray.push(characterObj.attribs.href);
      }
    }
  })
  .catch(console.error);

let currentCharacters = [
  '/wiki/4_Armed_Lizard_Girl',
  '/wiki/Action_Figures',
  '/wiki/Admiral_Scurvy',
  '/wiki/Adora',
  '/wiki/Baker,_Soda_Pop,_and_Busgirl',
  '/wiki/Beast_Island_Snake_Monster',
  '/wiki/Bow',
  '/wiki/Bright_Moon%27s_guardian',
  '/wiki/Castaspella',
  '/wiki/Catra',
  '/wiki/Double_Trouble',
  '/wiki/Emily',
  '/wiki/Entrapta',
  '/wiki/Etheria%27s_squirrel',
  '/wiki/Etherian_Deer',
  '/wiki/Fire_princess',
  '/wiki/Flutterina',
  '/wiki/Frosta',
  '/wiki/George_and_Lance',
  '/wiki/Glimmer',
  '/wiki/Grizzlor',
  '/wiki/Grox',
  '/wiki/Hordak',
  '/wiki/Horde_Prime',
  '/wiki/Horde_Prime%27s_Clone_Army',
  '/wiki/Horde_Robot',
  '/wiki/Horde_Soldier',
  '/wiki/Horned_Goon',
  '/wiki/Huntara',
  '/wiki/Imp',
  '/wiki/Infected_robots',
  '/wiki/King_Micah',
  '/wiki/Kyle',
  '/wiki/Light_Hope',
  '/wiki/Lonnie',
  '/wiki/Loo-Kee',
  '/wiki/Madame_Razz',
  '/wiki/Mara',
  '/wiki/Mermista',
  '/wiki/Netossa',
  '/wiki/Norwyn',
  '/wiki/Octavia',
  '/wiki/Peekablue',
  '/wiki/Perfuma',
  '/wiki/Pookas',
  '/wiki/Queen_Angella',
  '/wiki/Rogelio',
  '/wiki/Scorpia',
  '/wiki/Sea_Hawk',
  '/wiki/Sea_Witch',
  '/wiki/Serenia',
  '/wiki/Shadow_spy',
  '/wiki/Shadow_Weaver',
  '/wiki/Snake_Men',
  '/wiki/Spinnerella',
  '/wiki/Star_Sisters',
  '/wiki/Super_Pal_Duo',
  '/wiki/Super_Pal_Trio',
  '/wiki/Sweet_Bee',
  '/wiki/Swift_Wind',
  '/wiki/Tung_Lashor',
  '/wiki/Unnamed_Horde_Sergeant'
];
module.exports = currentCharacters;
