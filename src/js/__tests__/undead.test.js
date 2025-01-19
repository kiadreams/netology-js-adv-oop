import Undead from '../undead.js';
import {CHARACTERS_DATA} from '../character.js';


test('Testing the successful creation of a daemon', () => {
  const undead = new Undead('Denis', 'Undead');
  const resultData = {
    level: undead.level,
    health: undead.health,
    attack: undead.attack,
    defence: undead.defence,
    name: undead.name,
    type: undead.type
  };
  expect(resultData).toEqual({...CHARACTERS_DATA.Undead, name: 'Denis', type: 'Undead'});
});
