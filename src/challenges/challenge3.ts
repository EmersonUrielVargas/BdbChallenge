import { IPocket } from "src/models/IPocket";

export default function(pocket: IPocket){
    try{
        let sumatory: number = 0;
        const coinsSorted: number[] = [...pocket.monedas].sort((a, b)=> a - b);
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