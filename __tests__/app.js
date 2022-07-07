import { GameSavingLoader as GS } from '../src/app';
import { GameSavingLoader as GSP } from '../src/appPromise';

jest.setTimeout(15000);

test('AsyncAwait', async () => {
  const data = await GS.load();
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});

test('Promise', async () => {
  const data = await GSP.load();
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
