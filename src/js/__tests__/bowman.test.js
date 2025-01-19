import Bowman from '../bowman.js';
import {CHARACTERS_DATA} from '../character.js';

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
  expect(resultData).toEqual({...CHARACTERS_DATA.Bowman, name: 'Denis', type: 'Bowman'});
});

test.each([
  ['incorrect name type', [1, 'Bowman'], 'Имя должно быть'],
  ['the name is too long', ['GabrielDenis', 'Bowman'], 'Имя должно быть'],
  ['the name is too short', ['D', 'Bowman'], 'Имя должно быть'],
  ['incorrect type of value type', ['Denis', 1], 'Неправильно указан тип персонажа'],
  ['incorrect character type values', ['Denis', 'bowman'], 'Неправильно указан тип персонажа']
])('Testing creating a character with incorrect data: %s', (incorrectData, [name, type], msg) => {
  expect(() => {new Bowman(name, type)}).toThrow(msg);
});