/* Your code goes here */

class Fighter {
  constructor(fighter) {
    this._name = fighter.name;
    this._damage = fighter.damage;
    this._hp = fighter.hp;
    this._totalHP = fighter.hp;
    this._agility = fighter.agility;
    this._wins = 0;
    this._losses = 0;
  }

  get getName() {
    return this._name;
  }
  get getDamage() {
    return this._damage;
  }
  get getAgility() {
    return this._agility;
  }
  get getHealth() {
    return this._hp;
  }
  get getTotalHealth() {
    return this._totalHP;
  }
  get getWins() {
    return this._wins;
  }
  get getLosses() {
    return this._losses;
  }

  setName(name) {
    this._name = name;
  }
  setDamage(damage) {
    this._damage = damage;
  }
  setAgility(agl) {
    const MAX_AGILITY = 100;
    agl > MAX_AGILITY ? this._agility = MAX_AGILITY : this._agility = agl;
  }
  setHealth(data) {
    this._hp = data;
  }
  setTotalHealth(data) {
    this._totalHP = data;
  }

  attack(defender) {
    const PERCENTAGE = 100;
    let chance = defender.getAgility / PERCENTAGE;
    if (Math.random() >= chance) {
      defender.dealDamage(this.getDamage);
      console.log(`${this.getName} make ${this.getDamage} damage to ${
        defender.getName
      }. ${defender.getName}
         has left ${defender.getHealth}`);
    } else {
      console.log(`${this.getName} attack missed`);
    }
  }
  logCombatHistory() {
    console.log(
      `Name: ${this.getName}, Wins: ${this.getWins}, Losses: ${this.getLosses}`
    );
  }

  heal(hp) {
    if (this.getTotalHealth > this.getHealth + hp) {
      this.setHealth(this.getHealth + hp);
    } else {
      this.setHealth(this.getTotalHealth);
    }
  }

  dealDamage(hit) {
    let remainingHP = this.getHealth - hit;
    remainingHP > 0 ? this.setHealth(remainingHP) : this.setHealth(0);
  }

  addWin() {
    this._wins += 1;
  }
  addLoss() {
    this._losses += 1;
  }
}

const myFighter1 = new Fighter({
  name: 'John',
  damage: 20,
  hp: 100,
  agility: 25
});
const myFighter2 = new Fighter({
  name: 'TED',
  damage: 35,
  hp: 130,
  agility: 60
});

function battle(firstFighter, secondFighter) {
  if (firstFighter.getHealth === 0 || secondFighter.getHealth === 0) {
    console.log(
      `Attention! The fight cannot be started because ${
        firstFighter.getHealth === 0
          ? firstFighter.getName
          : secondFighter.getName
      } is dead`
    );
    return;
  } else {
    while (firstFighter.getHealth > 0 && secondFighter.getHealth > 0) {
      secondFighter.attack(firstFighter);
      if (firstFighter.getHealth > 0) {
        firstFighter.attack(secondFighter);
      } else {
        secondFighter.addWin();
        firstFighter.addLoss();
        console.log(`${secondFighter.getName} win`);
      }

      if (secondFighter.getHealth === 0) {
        firstFighter.addWin();
        secondFighter.addLoss();
        console.log(`${firstFighter.getName} win!`);
      }
    }
  }
}
