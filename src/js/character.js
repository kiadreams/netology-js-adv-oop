export const CHARACTERS_DATA = {
  Bowman: {level: 1, health: 100, attack: 25, defence: 25},
  Swordsman: {level: 1, health: 100, attack: 40, defence: 10},
  Magician: {level: 1, health: 100, attack: 10, defence: 40},
  Daemon: {level: 1, health: 100, attack: 10, defence: 40},
  Undead: {level: 1, health: 100, attack: 25, defence: 25},
  Zombie: {level: 1, health: 100, attack: 40, defence: 10},
}

export const GAME_VARIABLES = {
  attackLevelMultiplier: 1.2,
  defenceLevelMultiplier: 1.2,
}

export default class Character {

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new SyntaxError('Имя должно быть строковым типом с длинной от 2 до 10 символов');
    }
    if (typeof type !== 'string' || !Object.keys(CHARACTERS_DATA).includes(type)) {
      throw new SyntaxError('Неправильно указан тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.level = CHARACTERS_DATA[type].level;
    this.health = CHARACTERS_DATA[type].health;
    this.attack = CHARACTERS_DATA[type].attack;
    this.defence = CHARACTERS_DATA[type].defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }
    this.level++;
    this.health = 100;
    this.attack *= GAME_VARIABLES.attackLevelMultiplier;
    this.defence *= GAME_VARIABLES.defenceLevelMultiplier;
  }

  damage(points) {
    const damagePoints = points * (1 - this.defence / 100);
    this.health = this.health > damagePoints ? this.health - damagePoints : 0;
  }
}
