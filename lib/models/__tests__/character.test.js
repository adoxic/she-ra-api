const Character = require('../character');

describe('is an thing', () => {
  it('valid model', () => {
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
        },
        {
          href: 'https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/b/b6/Battler_She-Ra.png/revision/latest?cb=20191110060509',
          class: 'image image-thumbnail ',
          title: 'Battler She-Ra'
        },
        {
          href: 'https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/1/10/KidAdoraRender.png/revision/latest?cb=20181115002821',
          class: 'image image-thumbnail ',
          title: 'Child'
        }
      ],
      'Nicknames (aka)': ['Princess of Power', 'Princess Adora (', ')', 'Blondie (', ')'],
      Skills: [
        'Super-strength',
        'Shapeshifting Sword',
        'Limited healing powers',
        'Connection to the ancient ',
        ' of Etheria'
      ],
      Occupation: ['Rebellion leader', 'Horde officer (formerly)'],
      Species: ['Human, ', 'First Ones'],
      Gender: 'Female',
      Birthday: 'January 19',
      Runestone: [
        'Portal runestone housed in the crossguard of ',
        'Sword of Protection'
      ],
      Alignment: 'Lawful Good',
      'Relative(s)': 'Unknown',
      Color: 'Yellow',
      Likes: [
        'Winning, training, competitions, ',
        ' (formerly), something to punch, eating tasty food, ',
        ', being heroic'
      ],
      Dislikes: [', not being accepted, being alone'],
      Rank: 'Force Captain (formerly)',
      Team: [', ', 'Best Friends Squad'],
      Allegiance: ['The Rebellion', ' (formerly)'],
      Allies: [
        'Glimmer',       'Bow',
        'Mermista',      'Frosta',
        'Perfuma',       'Entrapta',
        'Seahawk',       ' (formerly)',
        'Queen Angella', 'Madame Razz',
        'Shadow Weaver'
      ],
      Enemies: ['The Horde', 'Hordak', 'Catra', ' (formerly)'],
      Status: 'Alive'
    };

    const thing = new Character(data);

    const errors = thing.validateSync();
    expect(errors).toBeUndefined();

    const json = thing.toJSON();
    expect(json).toEqual({
      ...data,
      _id: expect.any(Object)
    });
  });

  it('invalid model', () => {
    const data = {
      name: { false: false },
      birthYear: 'Stephanie Meyer'
    };
    const thing = new Character(data);

    const errors = thing.validateSync();
    expect(errors).toBeTruthy();
  });

});
