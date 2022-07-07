import read from './reader';
import json from './parser';

export class GameSavingLoader {
  static async load() {
    try {
      return await json(await read());
    } catch (error) {
      return error;
    }
  }
}

(async () => {
  const data = await GameSavingLoader.load();
  console.log(JSON.parse(data));
})();
