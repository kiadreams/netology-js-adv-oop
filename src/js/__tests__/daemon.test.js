import Daemon from '../daemon.js';


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
    attack: 10,
    defence: 40,
    level: 1,
    health: 100,
    name: 'Denis',
    type: 'Daemon',
  });
});
