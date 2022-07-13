import read from './reader';
import json from './parser';

export class GameSavingLoader {
  static async load() {
    try {
      const data = await json(await read());
      return new Promise((resolve, reject) => {        
        const loader = new GameSavingLoader();
        const dataJson = JSON.parse(data);
        for (const key in dataJson) {
          loader[key] = dataJson[key];
        }
        resolve(loader);
      })
    } catch (error) {
      console.log(error);
    }
  }
}
