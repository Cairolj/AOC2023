// @ts-ignore
import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);
  let sum = 0;

for (let ind = 0; ind < data.length; ind++) {
    const inp = data[ind].split(':')[1].split(';');
    let possible = true;

    for (const gamesStr of inp) {
        const games = gamesStr.trim().split(',');

        for (const gameStr of games) {
            const game = gameStr.trim().split(' ');

            if (
                (game[1] === 'red' && parseInt(game[0]) > 12) ||
                (game[1] === 'green' && parseInt(game[0]) > 13) ||
                (game[1] === 'blue' && parseInt(game[0]) > 14)
            ) {
                possible = false;
            }
        }
    }

    if (possible) {
        sum += (ind + 1);
    }
}
  return sum;
}

const answer = await day2a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
