// she-ra page test

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://she-raandtheprincessesofpower.fandom.com/wiki/Adora';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const characterImages = $('.image.image-thumbnail');
    const nickNames = $('div.pi-data-value.pi-font');
    const formatNickName = nickNames[0].children;

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
    for (let i = 0; i < formatNickName.length; i++) {
      const nameObj = formatNickName[i];
      if(nameObj.data) {
        character.nicknames.push(nameObj.data);
      }
    }

    console.log(character);
  })
  .catch(console.error);
