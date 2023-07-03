import filterNumbers from "./challenges/challenge1";

function executeChallenge1(): void{
    const title = "Challenge 1";
    const input: number[] = [10,20,30,40,50,60];
    const output = filterNumbers(input);
    printResult(title, input, output);
}

function printResult(title: string, input: any, output: any){
    console.log(`Ejecutando ${title}`);
    console.log(`Datos de entrada: ${input}`)
    console.log(`Resultado ejecución:  ${output}`)
}

executeChallenge1();