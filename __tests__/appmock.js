jest.mock('../src/reader');

import {GameSavingLoader} from '../src/appPromise';


// Должен быть возвращен тестируемый промис.
it('тестирует ошибки с использованием промисов', () => {
  expect.assertions(1);  
  return GameSavingLoader.load().catch(e =>
      expect(e).toEqual(new Error("Whoops!")),
    );
  });