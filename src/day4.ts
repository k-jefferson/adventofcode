export const day4 = (): number => {

    let matchingNumberCount = 0;
    for (let i = 240920; i <= 789857; i++) {
        const chars = i.toString().split("");
        
        if (hasToAdjacentDigitsEquals(chars) && itNeverDecreases(chars)) {
            matchingNumberCount++;
        }
    }
    return matchingNumberCount;
};

const hasToAdjacentDigitsEquals = (chars: Array<string>): boolean => {
    const limit = chars.length - 1;
    const groups: Array<{ n: number, count: number}> = [];
    for (let i = 0; i < limit; i++) {
        if (chars[i] === chars[i + 1]) {
            let j = i + 2;
            while (j < limit) {
                if (chars[j] !== chars[i]) {
                    break;
                }
                j++;
            }
            groups.push({n: +chars[i], count: j - i });
        }
    }
    return groups.findIndex(g => g.count === 2) > -1;
};

const itNeverDecreases = (chars: Array<string>): boolean => {
    const limit = chars.length - 1;
    for (let i = 0; i < limit; i++) {
        if (+chars[i] > +chars[i + 1]) {
            return false;
        }
    }
    return true;
};
