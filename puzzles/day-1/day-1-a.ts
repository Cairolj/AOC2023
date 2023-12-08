// @ts-ignore
import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1a(dataPath?: string) {
    const data = await readData(dataPath);
    let suma =0;
    for (let j = 0; j < data.length; j++) {
        let texto: string = data[j]
        let pos = 0
        let primero="";
        let ultimo="";
        for (let i = 0; i < texto.length; i++) {
            if(pos==0){
                if (Number(texto.charAt(i))) {
                    primero = texto.charAt(i);
                    pos = 1;
                } 
            }else{
                if (Number(texto.charAt(i))) {
                    ultimo = texto.charAt(i);
                } 
            }
        }
        if(ultimo==""){
            ultimo = primero;
        }
        suma =suma + Number(primero + ultimo)
    }
    return suma;
}

const answer = await day1a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
//nx day-1-a --data=sample
//nx day-1-a 