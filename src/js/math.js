export default class MathDamage {
  constructor(baseAttack) {
    this.baseAttack = baseAttack;
    this.damage = 0;
  }

  get damageValue() {
    return this.damage;
  }

  set damageValue(step) {
    if (step > 0) {
      this.damage = this.baseAttack - ((step - 1) * 10);
    } else {
      throw new Error('Некорректный ход');
    }
  }
}
