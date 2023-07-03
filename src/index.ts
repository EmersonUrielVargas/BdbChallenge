import filterNumbers from "./challenges/challenge1";
import orderNumbers from "./challenges/challenge2";
import getMinInvalidChangeCoins from "./challenges/challenge3";
import { IMatrix } from "./models/IMatrix";
import { IPocket } from "./models/IPocket";

function executeChallenge1(): void{
    const title = "Challenge 1";
    const input: number[] = [10,20,30,40,50,60];
    const output = filterNumbers(input);
    printResult(title, input, output);
}

function executeChallenge2(): void{
    const title = "Challenge 2";
    const input: IMatrix = {array:[-6,-5,0,5,6]};
    const output = orderNumbers(input);
    printResult(title, input.array, output);
}


function executeChallenge3(): void{
    const title = "Challenge 3";
    const input: IPocket = {"coins":[1,5,1,1,1, 10, 15, 20,100]};
    const output = getMinInvalidChangeCoins(input);
    printResult(title, input.coins, output);
}


function printResult(title: string, input: any, output: any){
    console.log('======================================')
    console.log(`Ejecutando ${title}`);
    console.log(`Datos de entrada: ${input}`)
    console.log(`Resultado ejecución:  ${output}`)
    console.log('======================================')
}

executeChallenge1();
executeChallenge2();
executeChallenge3();