import Daemon from '../daemon';

const kobiche = new Daemon('Artem', 100);
test('attack 3 cells', () => {
  kobiche.damageValue = 3;
  expect(kobiche.damageValue).toEqual(80);
});
test('attack -1 cells', () => {
  expect(() => { kobiche.damageValue = -1; }).toThrow(Error);
});
test('attack 3 cells with stoned', () => {
  kobiche.stoned = 3;
  expect(kobiche.stoned).toEqual(72);
});
