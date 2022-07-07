import read from './reader';
import json from './parser';

export class GameSavingLoader {
  static load() {
    return read().then((data) => json(data));
  }
}

GameSavingLoader.load().then((saving) => {
  console.log(JSON.parse(saving));
}, (error) => {
  console.log(error);
});
