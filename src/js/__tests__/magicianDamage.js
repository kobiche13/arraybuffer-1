import Magician from '../magician';

test('attack 2 cells with Stone', () => {
  const kobiche = new Magician('Artem', 2);
  kobiche.attack = 100;
  kobiche.stone = true;
  expect(kobiche.stone).toEqual(true);
  expect(kobiche.attack).toEqual(85);
});

test('attack 2 cells without Stone', () => {
  const kobiche = new Magician('Artem', 2);
  kobiche.attack = 100;
  kobiche.stone = false;
  expect(kobiche.attack).toEqual(90);
});

test('attack -1 cells', () => {
  let kobiche;
  expect(() => kobiche = new Magician('Artem', -1)).toThrow(Error);
});

test('invalid value stone', () => {
  const kobiche = new Magician('Artem', 2);
  kobiche.attack = 100;
  expect(() => kobiche.stone = -1).toThrow(Error);
});
