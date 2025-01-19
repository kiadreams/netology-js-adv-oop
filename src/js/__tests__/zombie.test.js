import Zombie from "../zombie.js";
import {CHARACTERS_DATA} from '../character.js';


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
  expect(resultData).toEqual({...CHARACTERS_DATA.Zombie, name: 'Denis', type: 'Zombie'});
});

test('Testing the successful creation of a zombie', () => {
  const zombie = new Zombie('Denis', 'Zombie');
  const resultData = {
    level: zombie.level,
    health: zombie.health,
    attack: zombie.attack,
    defence: zombie.defence,
    name: zombie.name,
    type: zombie.type
  };
  expect(resultData).toEqual({...CHARACTERS_DATA.Zombie, name: 'Denis', type: 'Zombie'});
});
