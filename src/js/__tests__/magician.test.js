import Magician from '../magician.js';
import {CHARACTERS_DATA} from '../gameSettings.js';


test('Testing the successful creation of a Magician', () => {
  const magician = new Magician('Denis', 'Magician');
  const resultData = {
    level: magician.level,
    health: magician.health,
    attack: magician.attack,
    defence: magician.defence,
    name: magician.name,
    type: magician.type
  };
  expect(resultData).toEqual({
    ...CHARACTERS_DATA.Magician,
    level: 1,
    health: 100,
    name: 'Denis',
    type: 'Magician',
  });
});
