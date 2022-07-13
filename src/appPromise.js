import { Promise } from 'core-js';
import read from './reader';
import json from './parser';

export class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((dataRead) => json(dataRead)).then((data) => {
        const loader = new GameSavingLoader();
        const dataJson = JSON.parse(data);
        for (const key in dataJson) {
          loader[key] = dataJson[key];
        }
        resolve(loader);
      });
    });
  }
}
