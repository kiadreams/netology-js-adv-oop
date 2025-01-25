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
