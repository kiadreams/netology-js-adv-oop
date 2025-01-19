import Bowman from '../bowman.js';
import {CHARACTERS_DATA, GAME_VARIABLES} from '../character.js';


test.each([
  [
    'damage points less than health points',
    CHARACTERS_DATA.Bowman.health,
    CHARACTERS_DATA.Bowman.health - CHARACTERS_DATA.Bowman.health * (1 - CHARACTERS_DATA.Bowman.defence / 100),
  ],
  [
    'damage points more than health points',
    CHARACTERS_DATA.Bowman.health * 2 / (1 - CHARACTERS_DATA.Bowman.defence / 100),
    0,
  ]
])('Testing the damage method of characters: %s', (condition, damagePoints, resultHealth) => {
  const bowman = new Bowman('Denis', 'Bowman');
  bowman.damage(damagePoints);
  expect(bowman.health).toBe(resultHealth);
});


test('Testing the levelUp method of characters', () => {
  const bowman = new Bowman('Denis', 'Bowman');
  bowman.health = 50;
  bowman.levelUp();
  const resultData = {
    level: bowman.level,
    health: bowman.health,
    attack: bowman.attack,
    defence: bowman.defence,
  };
  const expectedData = {
    level: CHARACTERS_DATA.Bowman.level + 1,
    health: CHARACTERS_DATA.Bowman.health,
    attack: CHARACTERS_DATA.Bowman.attack * GAME_VARIABLES.attackLevelMultiplier,
    defence: CHARACTERS_DATA.Bowman.defence * GAME_VARIABLES.defenceLevelMultiplier,
  }
  expect(resultData).toEqual(expectedData);
});

test('Testing throw error from levelUp method', () => {
  const bowman = new Bowman('Denis', 'Bowman');
  bowman.health = 0;
  expect(() => bowman.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
});
