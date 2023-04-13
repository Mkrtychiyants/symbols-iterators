export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  set name(name) {
    if ((name.length > 2) && (name.length < 10) && (typeof name === 'string')) {
      this.name1 = name;
    } else {
      throw new Error('Unsupported type of player');
    }
  }

  get name() {
    return this.name1;
  }

  set type(wariorType) {
    const allowedWariors = [
      'bowman',
      'swordsman',
      'magician',
      'daemon',
      'undead',
      'zombie',
    ];

    if ((typeof wariorType === 'string') && (allowedWariors.includes(wariorType.toLowerCase()))) {
      this.type1 = wariorType;
    } else throw new Error('Unsupported type of player');
  }

  get type() {
    return this.type1;
  }

  levelUp() {
    this.level += 1;
    this.attack = this.attack * 0.2 + this.attack;
    this.defence = this.defence * 0.2 + this.defence;
    if (this.health > 0) {
      this.health = 100;
    } else {
      throw new Error('Can\'t level up dead body');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Can\'t damage up dead body');
    }
  }
}
