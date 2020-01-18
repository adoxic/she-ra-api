// she-ra page test

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://she-raandtheprincessesofpower.fandom.com/wiki/Adora';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const characterImages = $('.image.image-thumbnail');

    const character = {
      images: [],
    };
    for (let i = 0; i < characterImages.length; i++) {
      const image = characterImages[i].attribs;
      if(image.title) {
        character.images[i] = image;
      }
    }
    console.log(character);
  })
  .catch(console.error);
