export default class MathDamage {
  constructor(step) {
    if (step >= 0) {
      this.step = step; // ячейка в которую бьет персонаж
    } else {
      throw new Error('ячейка для атаки не может быть меньше 0');
    }
  }

  get attack() {
    const stoneInChar = this.stone;
    if (stoneInChar) { // если наслали дурман
      return this.baseAttack - ((this.step - 1) * 10) - Math.round(Math.log2(this.step) * 5);
    }
    return this.baseAttack - ((this.step - 1) * 10);// если не насылали
  }

  set attack(attack) {
    this.baseAttack = attack;// устанавливаем базувую атаку
  }

  set stone(booleanValue) { // наслан ли дурман
    if (booleanValue === true || booleanValue === false) {
      this.stoneValue = booleanValue;
    } else {
      throw new Error('Вводимое значение должно быть true или false');
    }
  }

  get stone() {
    return this.stoneValue;
  }
}
