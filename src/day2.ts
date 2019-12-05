const puzzleInputs = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,10,23,27,2,27,13,31,1,31,6,35,2,6,35,39,1,39,5,43,1,6,43,47,2,6,47,51,1,51,5,55,2,55,9,59,1,6,59,63,1,9,63,67,1,67,10,71,2,9,71,75,1,6,75,79,1,5,79,83,2,83,10,87,1,87,5,91,1,91,9,95,1,6,95,99,2,99,10,103,1,103,5,107,2,107,6,111,1,111,5,115,1,9,115,119,2,119,10,123,1,6,123,127,2,13,127,131,1,131,6,135,1,135,10,139,1,13,139,143,1,143,13,147,1,5,147,151,1,151,2,155,1,155,5,0,99,2,0,14,0];

export const day2 = (noun: number, verb: number): number => {

    const inputs = puzzleInputs.slice();
    inputs[1] = noun;
    inputs[2] = verb;
    const inputLength = inputs.length;

    for (let i = 0; i < inputLength; i += 4) {
        const operation = <Operation>inputs[i];

        if (operation === Operation.stop) {
            return inputs[0];
        }
        else {
            const positionA = inputs[i + 1];
            const positionB = inputs[i + 2];
            const positionResult = inputs[i + 3];
    
            const a = inputs[positionA];
            const b = inputs[positionB];
    
            const result = operation === Operation.add ? a + b : a * b;
            inputs[positionResult] = result;
        }
    }
    throw new Error("Arrived at the end of the inputs without encountering a code 99");
};

enum Operation {
    add = 1,
    multiply = 2,
    stop = 99
}

// day2(41, 12) = 19.690.720

// day2(12, 2) = 6.327.510
// day2(24, 4) = 11.857.112
// day2(48, 8) = 22.916.316
// day2(47, 8) = 22.455.516
// day2(48, 7) = 22.916.315
