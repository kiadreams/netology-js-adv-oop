import Character from './character.js';
import {CHARACTERS_DATA} from "./gameSettings.js";


export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = CHARACTERS_DATA[this.type].attack;
    this.defence = CHARACTERS_DATA[this.type].defence;
  }
}
