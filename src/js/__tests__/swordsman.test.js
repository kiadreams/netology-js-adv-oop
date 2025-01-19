import Swordsman from '../swordsman.js';
import {CHARACTERS_DATA} from '../character.js';

test('Testing the successful creation of a daemon', () => {
  const swordsman = new Swordsman('Denis', 'Swordsman');
  const resultData = {
    level: swordsman.level,
    health: swordsman.health,
    attack: swordsman.attack,
    defence: swordsman.defence,
    name: swordsman.name,
    type: swordsman.type
  };
  expect(resultData).toEqual({...CHARACTERS_DATA.Swordsman, name: 'Denis', type: 'Swordsman'});
});