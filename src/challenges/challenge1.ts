

/** S = cualquier número del 1 al 9
 * Teniendo una lista de n números con dígitos en el rango [0, S], donde n <= 100, 
 * cambiar todas las posiciones de la lista en O(n) tiempo.
 * Si el número de entrada contiene un dígito mayor o igual que S, borrará el dígito del número,
 * por ejemplo con S=6, 61 se convierte en 1, y 6 se borrará de la matriz. El resultado se imprimirá en 
 * la consola/terminal. Por favor, no utilizar la ordenación integrada del lenguaje. 
*/


const S: number = 8;
const validateNumber = (num: number) => num < S;

export default function filterNumbers(numbers: number[]): number[]{
    try {
        if (numbers.length > 100) {
            throw RangeError("The array is too long, max length allow is 100 numbers");
        }
        let result: number[] = [];
        for (let index = (numbers.length - 1); index >= 0; index--) {
            let number_act = numbers[index];

            if (validateNumber(number_act)) {
                result.push(number_act);
            }else {
                const revised_number = deleteDigit(number_act)
                if(revised_number !== undefined){
                    result.push(revised_number);
                }
            }
        }
        return result;
        
    } catch (error: any) {
        return error.message;
    }
}

function deleteDigit (number_init: number): number | undefined{
    const num_to_string = number_init.toString();
    const digits_num = num_to_string.split('');
    
    let validated_num_string = '';
    for (const digit of digits_num) {
        if (validateNumber(Number(digit))) {
            validated_num_string += digit;
        }
    }
    return validated_num_string !== ''? Number(validated_num_string): undefined;
}