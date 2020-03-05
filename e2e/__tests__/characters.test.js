require('dotenv').config();
const request = require('../request');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

describe('test character routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  const adora = {
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

  const postCharacter = (data) => {
    return request 
      .post('/api/characters')
      .send(data)
      .expect(200)
      .then(({ body }) => body);
  };

  it('should post a character', () => {
    return request
      .post('/api/characters')
      .send(adora)
      .expect(200)
      .then(({ body }) => {
        expect(body.name).toBe('Adora');
      });
  });

  it('should get a character', () => {
    return postCharacter(adora)
      .then(() => {
        return request
          .get('/api/characters')
          .expect(200);
      });
    
  });
});
