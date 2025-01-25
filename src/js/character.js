import {CHARACTERS_DATA, GAME_VARIABLES} from "./gameSettings.js";

export default class Character {

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строковым типом с длинной от 2 до 10 символов');
    }
    if (typeof type !== 'string' || !Object.keys(CHARACTERS_DATA).includes(type)) {
      throw new Error('Неправильно указан тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }
    this.level++;
    this.health = 100;
    this.attack *= GAME_VARIABLES.attackLevelUpMultiplier;
    this.defence *= GAME_VARIABLES.defenceLevelUpMultiplier;
  }

  damage(points) {
    const damagePoints = points * (1 - this.defence / 100);
    this.health = this.health > damagePoints ? this.health - damagePoints : 0;
  }
}
