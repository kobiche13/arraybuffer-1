import Daemon from '../daemon';


test('attack 2 cells with Stone', () => {
  const kobiche = new Daemon('Artem', 2);
  kobiche.attack = 100;
  kobiche.stone = true;
  expect(kobiche.stone).toEqual(5);
  expect(kobiche.attack).toEqual(85);
});

test('attack 2 cells without Stone', () => {
  const kobiche = new Daemon('Artem', 2);
  kobiche.attack = 100;
  kobiche.stone = false;
  expect(kobiche.attack).toEqual(90);
});

test('attack -1 cells', () => {  
  expect(() => kobiche = new Daemon('Artem', -1)).toThrow(Error);
});

test('invalid value stone', () => {  
  const kobiche = new Daemon('Artem', 2);
  kobiche.attack = 100;
  expect(() => kobiche.stone = -1).toThrow(Error);
});



