// she-ra page test

const axios = require('axios');
const cheerio = require('cheerio');
const { formatList } = require('./utils');

const url = 'https://she-raandtheprincessesofpower.fandom.com/wiki/Adora';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const characterImages = $('.image.image-thumbnail');
    const lists = $('div.pi-data-value.pi-font');
    
    const nickName = lists[0].children;
    const skills = lists[1].children;

    const character = {
      names: [],
      images: [],
      alive: true,
      nicknames: [],
      skills: [],
    };
    for (let i = 0; i < characterImages.length; i++) {
      const image = characterImages[i].attribs;
      if(image.title && image.href.match(/^https/g)) {
        character.images[i] = image;
      }
    }
    
    formatList(nickName, character.nicknames);
    formatList(skills, character.skills);

    console.log(character);
  })
  .catch(console.error);
