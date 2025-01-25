import Swordsman from '../swordsman.js';


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
  expect(resultData).toEqual({
    attack: 40,
    defence: 10,
    level: 1,
    health: 100,
    name: 'Denis',
    type: 'Swordsman',
  });
});
