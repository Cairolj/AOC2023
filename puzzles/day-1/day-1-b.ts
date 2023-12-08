// @ts-ignore
import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1b(dataPath?: string) {
    const data = await readData(dataPath);
    let sum: number = 0; 
    const numbersNames: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let inp of data) {
        const nums: string[] = []; 
        for (let i = 0; i < inp.length; i++) {
            for (let val = 0; val < numbersNames.length; val++) {
                const name = numbersNames[val];
                if (inp.slice(i, i + name.length) === name) {
                    nums.push(String(val)); 
                }
            }
            if (inp.charCodeAt(i) <= 57) { 
                nums.push(inp[i]); 
            }
        }
        let final = ''+nums[0] + nums[nums.length - 2]
        sum += parseInt(nums[0] + nums[nums.length - 2], 10);
    }
    return sum;
}

const answer = await day1b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
