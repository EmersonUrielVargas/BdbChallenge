
/** S = cualquier número del 1 al 9
 * Escribe una función que tome una matriz no vacía de enteros ordenados en orden ascendente y 
 * devuelva una nueva matriz de la misma longitud con los cuadrados de los enteros originales 
 * también ordenados en orden ascendente. 
 * Si el número de salida está fuera del rango [0, SS] (para S=6 el rango será [0, 66]),
 * lo borrará del array de salida. Por favor, no utilizar la ordenación integrada del lenguaje
 */
import { IMatrix } from "src/models/IMatrix";
const S = 8;
const validateNumber = (num: number) => num < (S*11);

export default function(matrix: IMatrix){
    try {
        if (matrix.array.length === 0) {
            throw RangeError("The array is empty");
        }
        let squartNumberList: number[] = [];
        for(const numberInput of matrix.array){
            const squartNumber = numberInput*numberInput;
            if(validateNumber(squartNumber)){
                squartNumberList.push(squartNumber)
            }
        } 
        return selectionSort(squartNumberList);
    } catch (error: any) {
        return error.message;
    }
}

function selectionSort(array: number[]): number[]{
    let arrayToSort: number[] = [...array];
    for (let index = 0; index < arrayToSort.length; index++) {
        let minIndex = index;
        for (let compareIndex = index; compareIndex < arrayToSort.length; compareIndex++) {
            if (arrayToSort[compareIndex] < arrayToSort[minIndex]) {
                minIndex = compareIndex;
            }
        }
        let numAux = arrayToSort[index];
        arrayToSort[index] = arrayToSort[minIndex];
        arrayToSort[minIndex] = numAux;
    }
    return arrayToSort;
}