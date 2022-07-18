class Weapon {
  public attack() {
    console.log("hit!");
  }
}

class Whip extends Weapon {
  public attack() {
    console.log("whipwhip!");
  }
}

class Player1 {
  private weapon: Weapon;

  constructor() {
    this.weapon = new Whip();
  }

  public attack() {
    this.weapon.attack();
  }
}

const me = new Player1();
me.attack();

// -->

class Player2 {
  private weapon: Weapon;
  constructor(weapon: Weapon) {
    this.weapon = weapon;
  }

  public attack() {
    this.weapon.attack();
  }
}
