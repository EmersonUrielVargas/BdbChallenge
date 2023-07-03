import challenge2 from "../../challenges/challenge2";
import { IMatrix } from "src/models/IMatrix";

describe('challenge2', () =>{
    test('should print [1,4,9,25,36,64] if they receive {"array":[1,2,3,5,6,8,10,25]}', () => { 
        const expected = [1,4,9,25,36,64];
        const input: IMatrix = {array:[1,2,3,5,6,8,10,25]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

    test('should print [] if they receive {"array":[10,25]}', () => { 
        const expected: number[] = [];
        const input: IMatrix = {"array":[10,25]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

    test('should print [] if they receive {"array":[25]}', () => { 
        const expected: number[] = [];
        const input: IMatrix = {"array":[25]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })
    
    test('should print [1,4] if they receive {"array":[-2,-1]}', () => { 
        const expected: number[] = [1,4];
        const input: IMatrix = {"array":[-2,-1]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

    test('should print [0,16,16,25,25,49,49] if they receive {"array":[-7,-5,-4,0,4,5,7]}', () => { 
        const expected: number[] = [0,16,16,25,25,49,49];
        const input: IMatrix = {"array":[-5,-7,-4,0,7,4,5]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

    test('should print [] if they receive {"array":[-10,10]}', () => { 
        const expected: number[] = [];
        const input: IMatrix = {"array":[-10,10]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })


    test('should print rangeError if the array is empty', () => { 
        const expected = "The array is empty";
        const input: IMatrix = {"array":[]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

})