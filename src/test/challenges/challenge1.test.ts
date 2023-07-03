import challenge1 from "../../challenges/challenge1"

describe('challenge1', () =>{

    test(`Given the array [1,2,3,4,5,8]
        when execute the chalenge 1
        then receive [5,4,3,2,1]`, () => { 
            const expected: number[] = [5,4,3,2,1]
            const result = challenge1([1,2,3,4,5,8])
            expect(expected).toEqual(result)
    })

    test(`Given the array [88]
        when execute the chalenge 1
        then receive []`, () => { 
            const expected: number[] = []
            const result = challenge1([88])
            expect(expected).toEqual(result)
    })

    test(`Given the array [8]
        when execute the chalenge 1
        then receive []`, () => { 
            const expected: number[] = []
            const result = challenge1([8])
            expect(expected).toEqual(result)
    })

    test(`Given the array [87,8]
        when execute the chalenge 1
        then receive [0,7]`, () => { 
            const expected: number[] = [7]
            const result = challenge1([87,8])
            expect(expected).toEqual(result)
    })

    test(`Given the array  [89,93,1,2,5,6,4]
        when execute the chalenge 1
        then receive [4,6,5,2,1,3]`, () => { 
            const expected: number[] = [4,6,5,2,1,3]
            const result = challenge1([89,93,1,2,5,6,4])
            expect(expected).toEqual(result)
    })

    test(`Given the array [888485]
        when execute the chalenge 1
        then receive  [45]`, () => { 
            const expected: number[] = [45]
            const result = challenge1([888485])
            expect(expected).toEqual(result)
    })

    test(`Given the array numbers with size greater that 100 elements
        when execute the chalenge 1
        then receive error`, () => { 
            let arrayTest: number[] = []
            for (let index = 0; index < 102; index++) {
                arrayTest.push(index);
            };
            const result = challenge1(arrayTest)
            const expected = "The array is too long, max length allow is 100 numbers"
            expect(expected).toEqual(result)
    })
})