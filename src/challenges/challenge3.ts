import { IPocket } from "src/models/IPocket";

/**
 * Dada una matriz de enteros positivos que representan los valores de las monedas en su posesión, 
 * escriba una función que devuelva la cantidad mínima de cambio (la suma mínima de dinero) que
 * NO PUEDE dar a cambio. Las monedas dadas pueden tener cualquier valor entero positivo y no
 * son necesariamente únicas (es decir, puede tener varias monedas del mismo valor)
 */

export default function(pocket: IPocket){
    try{
        let sumatory: number = 0;
        const coinsSorted: number[] = [...pocket.coins].sort((a, b)=> a - b);
        for (let index = 0; index < coinsSorted.length; index++) {
            if (coinsSorted[index] <= 0) {
                throw RangeError("The data in array is not a positive integer");
            }
            if(coinsSorted[index] > (sumatory+1)){
                return (sumatory+1);
            }else {
                sumatory += coinsSorted[index];
            }
        }
        return (sumatory+1);
    }catch(error: any){
        return error.message;
    }
}