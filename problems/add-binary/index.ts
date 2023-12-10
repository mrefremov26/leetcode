// simplest solutions in js - use BigInt constructor for get numbers, plus these and convert to string.
function addBinary(a: string, b: string): string {
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
};
