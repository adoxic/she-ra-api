// she-ra page test
/* eslint-disable  no-console */

const axios = require('axios');
const cheerio = require('cheerio');
const { formatList } = require('./utils');
const currentCharacters = require('./scrape-characters');


const baseUrl = 'https://she-raandtheprincessesofpower.fandom.com';

for(let i = 0; i < currentCharacters.length; i++) {

  const characterHref = currentCharacters[i];
  const url = `${baseUrl}${characterHref}`;

  axios(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      
      const values = $('div.pi-data-value.pi-font');
      const keys = $('h3.pi-data-label.pi-secondary-font');
      
      const characterImages = $('.image.image-thumbnail');
      const name = $('h2.pi-item.pi-item-spacing.pi-title');
      
      const character = {
        name: '',
        images: [],
      };
      for(let i = 0; i < characterImages.length; i++) {
        const image = characterImages[i].attribs;
        if(image.href.match(/^https/g)) {
          character.images[i] = image;
        }
      }
      character.name = name[0].children[0].data;
      
      for(let i = 0; i < keys.length; i++) {
        const key = keys[i].children[0].data;
        const value = values[i].children;
        if(value.length > 1) {
          
          character[key] = [];
          formatList(value, character[key]);
        } else {
          if(value[0].data) {
            character[key] = value[0].data;
          }
        }
          
      }
      console.log(character);
    })
    .catch(console.error);
}

    

