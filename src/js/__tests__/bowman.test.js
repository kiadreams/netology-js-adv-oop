import Bowman from '../bowman.js';


test('Testing the successful creation of a bowman', () => {
  const bowman = new Bowman('Denis', 'Bowman');
  const resultData = {
    level: bowman.level,
    health: bowman.health,
    attack: bowman.attack,
    defence: bowman.defence,
    name: bowman.name,
    type: bowman.type
  };
  expect(resultData).toEqual({
    attack: 25,
    defence: 25,
    level: 1,
    health: 100,
    name: 'Denis',
    type: 'Bowman',
  });
});


test.each([
  ['damage points less than health points', 70, 100 - 70 * (1 - 25 / 100)],
  ['damage points more than health points', 170 / (1 - 25 / 100), 0],
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
    level: 2,
    health: 100,
    attack: 25 * 1.2,
    defence: 25 * 1.2,
  }
  expect(resultData).toEqual(expectedData);
});


test('Testing throw error from levelUp method', () => {
  const bowman = new Bowman('Denis', 'Bowman');
  bowman.health = 0;
  expect(() => bowman.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
});
