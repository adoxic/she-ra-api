//character page to array 
/* eslint-disable  no-console */

const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = 'https://she-raandtheprincessesofpower.fandom.com';
const url = `${baseUrl}/wiki/Category:Characters`;
let characterArray = [];

axios(url)
  .then(response => {
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
    
    console.log(characterArray);
  })
  .catch(console.error);

module.exports = characterArray;
