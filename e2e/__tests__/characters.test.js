const request = require('../request');

describe('test character routes', () => {
  it('should post a character', () => {
    const data = {
      name: 'Adora',
      images: [
        {
          href: 'https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/a/a4/AdoraRender.png/revision/latest?cb=20181030172527',
          class: 'image image-thumbnail ',
          title: 'Adora'
        },
        {
          href: 'https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/b/b4/She-RaRender.png/revision/latest?cb=20181108162238',
          class: 'image image-thumbnail ',
          title: 'She-Ra'
        }
      ],
      Skills: [
        'Super-strength',
        'Shapeshifting Sword',
        'Limited healing powers'
      ],
      Status: 'Alive'
    };

    
  });
});
