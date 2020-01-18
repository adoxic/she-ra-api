// she-ra page test

const axios = require('axios');

const url = 'https://she-raandtheprincessesofpower.fandom.com/wiki/Adora';

axios(url)
  .then(response => {
    const html = response.data;
    console.log(html);
  })
  .catch(console.error);
