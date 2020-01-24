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
    const keys = $('h3.pi-data-label.pi-secondary-font');
    const name = $('h2.pi-item.pi-item-spacing.pi-title');
    
    const nickName = lists[0].children;
    const skills = lists[1].children;
    const occupation = lists[2].children;
    const species = lists[3].children[0].data;
    const gender = lists[4].children[0].data;
    let allegement = lists[5].children[0];
    

    const character = {
      name: '',
      images: [],
      status: 'alive',
      nicknames: [],
      skills: [],
      occupation: [],
      allies: [],
      enemies: [],
      allegiance: [],
      rank: [],
      species: '',
      gender: '',
      allegement: '',
      homePlanet: ''
    };
    for(let i = 0; i < characterImages.length; i++) {
      const image = characterImages[i].attribs;
      if(image.title && image.href.match(/^https/g)) {
        character.images[i] = image;
      }
    }
    character.name = name[0].children[0].data;
    character.species = species;
    character.gender = gender;
    formatList(nickName, character.nicknames);
    formatList(skills, character.skills);
    formatList(occupation, character.occupation);

    console.log(keys[0].children);
  })
  .catch(console.error);
