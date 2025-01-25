import Daemon from '../daemon.js';
import {CHARACTERS_DATA} from '../gameSettings.js';


test('Testing the successful creation of a daemon', () => {
  const daemon = new Daemon('Denis', 'Daemon');
  const resultData = {
    level: daemon.level,
    health: daemon.health,
    attack: daemon.attack,
    defence: daemon.defence,
    name: daemon.name,
    type: daemon.type
  };
  expect(resultData).toEqual({
    ...CHARACTERS_DATA.Daemon,
    level: 1,
    health: 100,
    name: 'Denis',
    type: 'Daemon',
  });
});
