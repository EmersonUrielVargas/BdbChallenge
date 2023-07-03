import challenge2 from "../../challenges/challenge2";
import { IMatrix } from "src/models/IMatrix";

describe('challenge2', () =>{
    test(`Given the array of numbers {array:[1,2,3,5,6,8,10,25]}
        when filter the input
        then return [1,4,9,25,36,64]`, () => { 
        const expected = [1,4,9,25,36,64];
        const input: IMatrix = {array:[1,2,3,5,6,8,10,25]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of numbers {"array":[10,25]}
        when filter the input
        then return a empty array`, () => { 
        const expected: number[] = [];
        const input: IMatrix = {"array":[10,25]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of numbers {"array":[25]}
        when filter the input
        then return a empty array`, () => { 
        const expected: number[] = [];
        const input: IMatrix = {"array":[25]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })
    
    test(`Given the array of numbers {"array":[-2,-1]}
        when filter the input
        then return [1,4]`, () => { 
        const expected = [1,4];
        const input: IMatrix = {"array":[-2,-1]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of numbers {"array":[-5,-7,-4,0,7,4,5]}
        when filter the input
        then return [0,16,16,25,25,49,49]`, () => { 
        const expected = [0,16,16,25,25,49,49];
        const input: IMatrix = {"array":[-5,-7,-4,0,7,4,5]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of numbers {"array":[-10,10]}
        when filter the input
        then return empty array`, () => { 
        const expected: number[] = [];
        const input: IMatrix = {"array":[-10,10]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })


    test(`Given the array of numbers empty
        when filter the input
        then return rangeError`, () => { 
        const expected = "The array is empty";
        const input: IMatrix = {"array":[]};
        const result = challenge2(input);
        expect(expected).toEqual(result);
    })

})