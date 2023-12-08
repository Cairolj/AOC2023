import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day2b(dataPath?: string) {
  const data = await readData(dataPath);
  let sum: number = 0;

for (const inp of data) {
    const colors: string[] = inp.split(':')[1].split(';');
    const rgb: number[] = [0, 0, 0];

    for (const games of colors) {
        const gameList: string[] = games.trim().split(',');

        for (const game of gameList) {
            const gameInfo: string[] = game.trim().split(' ');

            if (gameInfo[1] === 'green' && parseInt(gameInfo[0]) > rgb[1]) {
                rgb[1] = parseInt(gameInfo[0]);
            }

            if (gameInfo[1] === 'red' && parseInt(gameInfo[0]) > rgb[0]) {
                rgb[0] = parseInt(gameInfo[0]);
            }

            if (gameInfo[1] === 'blue' && parseInt(gameInfo[0]) > rgb[2]) {
                rgb[2] = parseInt(gameInfo[0]);
            }
        }
    }

    sum += rgb[0] * rgb[1] * rgb[2];
}

  return sum;
}

const answer = await day2b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
