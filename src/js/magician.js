import MathDamage from './math';

export default class Magician extends MathDamage {
  constructor(name, step) {
    super(step);
    this.name = name;
  }
}
