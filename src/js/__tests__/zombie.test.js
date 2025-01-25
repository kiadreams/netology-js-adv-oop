import Zombie from "../zombie.js";


test('Testing the successful creation of a daemon', () => {
  const zombie = new Zombie('Denis', 'Zombie');
  const resultData = {
    level: zombie.level,
    health: zombie.health,
    attack: zombie.attack,
    defence: zombie.defence,
    name: zombie.name,
    type: zombie.type
  };
  expect(resultData).toEqual({
    attack: 40,
    defence: 10,
    level: 1,
    health: 100,
    name: 'Denis',
    type: 'Zombie',
  });
});
