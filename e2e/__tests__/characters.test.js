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

  const simple = [
    { name: 'Scully' },
    { name: 'Mulder' },
    { name: 'Skinner' },
    { name: 'Cigarette Man' },
    { name: 'Mr. X' },
    { name: 'Samantha' },
    { name: 'The Lope Gunman' },
    { name: 'The FBI' },
    { name: 'Quequeck' }
  ];

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

  it('should get all characters', () => {
    return postCharacter(adora)
      .then(() => {
        return request
          .get('/api/characters')
          .expect(200);
      });
  });
  
  it('should get characters by page', () => {
    return Promise.all([
      simple.forEach(name => {
        postCharacter(name);
      })
    ])
      .then(() => {
        return request
          .get('/api/characters/page/1')
          .expect(200)
          .then(({ body }) => {
            expect(body[0].name).toBe('Scully');
            expect(body.length).toBe(5);
          });
      
      })
      .then(() => {
        return request
          .get('/api/characters/page/2')
          .expect(200)
          .then(({ body }) => {
            expect(body[0].name).toBe('Samantha');
            expect(body.length).toBe(4);
          });
      });
      

  });

});
