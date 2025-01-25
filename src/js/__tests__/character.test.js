import Character from "../character.js";

test.each([
  ['incorrect name type', [1, 'Bowman'], 'Имя должно быть'],
  ['the name is too long', ['GabrielDenis', 'Bowman'], 'Имя должно быть'],
  ['the name is too short', ['D', 'Bowman'], 'Имя должно быть'],
  ['incorrect type of value type', ['Denis', 1], 'Неправильно указан тип персонажа'],
  ['incorrect character type values', ['Denis', 'bowman'], 'Неправильно указан тип персонажа']
])('Testing creating a character with incorrect data: %s', (incorrectData, [name, type], msg) => {
  expect(() => {new Character(name, type)}).toThrow(msg);
});


// test.each([
//   [
//     'damage points less than health points',
//     70,
//     100 - 70 * (1 - CHARACTERS_DATA.Bowman.defence / 100),
//   ],
//   [
//     'damage points more than health points',
//     170 / (1 - CHARACTERS_DATA.Bowman.defence / 100),
//     0,
//   ]
// ])('Testing the damage method of characters: %s', (condition, damagePoints, resultHealth) => {
//   const bowman = new Bowman('Denis', 'Bowman');
//   bowman.damage(damagePoints);
//   expect(bowman.health).toBe(resultHealth);
// });
//
//
// test('Testing the levelUp method of characters', () => {
//   const bowman = new Bowman('Denis', 'Bowman');
//   bowman.health = 50;
//   bowman.levelUp();
//   const resultData = {
//     level: bowman.level,
//     health: bowman.health,
//     attack: bowman.attack,
//     defence: bowman.defence,
//   };
//   const expectedData = {
//     level: 2,
//     health: 100,
//     attack: CHARACTERS_DATA.Bowman.attack * GAME_VARIABLES.attackLevelUpMultiplier,
//     defence: CHARACTERS_DATA.Bowman.defence * GAME_VARIABLES.defenceLevelUpMultiplier,
//   }
//   expect(resultData).toEqual(expectedData);
// });
//
//
// test('Testing throw error from levelUp method', () => {
//   const bowman = new Bowman('Denis', 'Bowman');
//   bowman.health = 0;
//   expect(() => bowman.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
// });
