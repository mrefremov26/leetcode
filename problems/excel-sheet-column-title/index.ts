const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function convertToTitle(columnNumber: number): string {
    let result = ''
    while(columnNumber > alphabet.length) {
        let last = columnNumber % alphabet.length
        last == 0 ? last = alphabet.length : 0
        result = alphabet[last - 1] + result
        columnNumber = (columnNumber - last) / alphabet.length
    }
    result = alphabet[columnNumber-1] + result;
    return result;
};
