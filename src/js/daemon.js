import MathDamage from './math';

export default class Daemon extends MathDamage {
  constructor(name, baseAttack) {
    super(baseAttack);
    this.name = name;
  }

  set stoned(step) {
    super.damageValue = step;
    this.damage = Math.round(this.damage - Math.log2(step) * 5);
  }

  get stoned() {
    return this.damage;
  }
}
