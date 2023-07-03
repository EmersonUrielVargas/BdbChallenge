import { IPocket } from "src/models/IPocket";
import challenge3 from "../../challenges/challenge3";


describe('challenge3', () =>{

    test(`Given the array of coins {"coins":[1,2,4]}
        when calculate the minor change invalid
        then return value 8`, () => { 
        const expected = 8;
        const input: IPocket = {"coins":[1,2,4]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins {"coins":[1,2,4,9]}
        when calculate the minor change invalid
        then return value 8`, () => { 
        const expected = 8;
        const input: IPocket = {"coins":[1,2,4,9]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins  {"coins":[10,25]}
        when calculate the minor change invalid
        then return value 1`, () => { 
        const expected = 1;
        const input: IPocket = {"coins":[10,25]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins {"coins":[2]}
        when calculate the minor change invalid
        then return value 1`, () => { 
        const expected = 1;
        const input: IPocket = {"coins":[2]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins {"coins":[1,2,4,9,7]}
        when calculate the minor change invalid
        then return value 24`, () => { 
        const expected = 24;
        const input: IPocket = {"coins":[1,2,4,9,7]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins {"coins":[1,2,4,9,7,1234, 25, 45,23560]}
        when calculate the minor change invalid
        then return value 24`, () => { 
        const expected = 24;
        const input: IPocket = {"coins":[1,2,4,9,7,1234, 25, 45,23560]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins {"coins":[1,1,1,1,1]}
        when calculate the minor change invalid
        then return value 6`, () => { 
        const expected = 6;
        const input: IPocket = {"coins":[1,1,1,1,1]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins {"coins":[1,2,1,2,1]}
        when calculate the minor change invalid
        then return value 8`, () => { 
        const expected = 8;
        const input: IPocket = {"coins":[1,2,1,2,1]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins {"coins":[32,1,2,1,2,1]}
        when calculate the minor change invalid
        then return value 8`, () => { 
        const expected = 8;
        const input: IPocket = {"coins":[32,1,2,1,2,1]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins {"coins":[32,1,2,6,1,2,1]}
        when calculate the minor change invalid
        then return value 14`, () => { 
        const expected = 14;
        const input: IPocket = {"coins":[32,1,2,6,1,2,1]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given the array of coins {"coins":[5,7,1,1,2,3,22]}
        when calculate the minor change invalid
        then return value 20`, () => { 
        const expected = 20;
        const input: IPocket = {"coins":[5,7,1,1,2,3,22]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given a array of coins with negatives values
        when calculate the minor change invalid
        then print error data`, () => { 
        const expected = "The data in array is not a positive integer"
        const input: IPocket = {"coins":[-10,10]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

    test(`Given a array of coins with values in zero
        when calculate the minor change invalid
        then print error data`, () => { 
        const expected = "The data in array is not a positive integer"
        const input: IPocket = {"coins":[10,0]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })


    test(`Given a empty array of coins
        when calculate the minor change invalid
        then get 1`, () => { 
        const expected = 1;
        const input: IPocket = {"coins":[]};
        const result = challenge3(input);
        expect(expected).toEqual(result);
    })

})