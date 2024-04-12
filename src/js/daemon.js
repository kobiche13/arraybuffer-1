import MathDamage from './math';

export default class Daemon extends MathDamage {
  constructor(name, step) {
    super(step);
    this.name = name;
  }
}
