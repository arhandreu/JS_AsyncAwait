import { GameSavingLoader as GS } from '../src/app';
import { GameSavingLoader as GSP } from '../src/appPromise';

jest.setTimeout(15000);

test('AsyncAwait', async () => {
  const data = await GS.load();
  expect(data).toBeInstanceOf(GS)
});

test('Promise', async () => {
  const data = await GSP.load();
  expect(data).toBeInstanceOf(GSP)
});
