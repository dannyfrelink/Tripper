interface ObjectType {
    [number: number]: string;
}

const numbers: ObjectType = {
    0: 'nul', 1: 'één', 2: 'twee', 3: 'drie', 4: 'vier', 5: 'vijf', 6: 'zes', 7: 'zeven', 8: 'acht', 9: 'negen',
    10: 'tien', 11: 'elf', 12: 'twaalf', 13: 'dertien', 14: 'veertien', 15: 'vijftien', 16: 'zestien', 17: 'zeventien', 18: 'achtien', 19: 'negentien', 
    20: 'twintig', 21: 'éénentwintig', 22: 'tweeëntwintig', 23: 'drieëntwintig', 24: 'vierentwintig', 25: 'vijfentwintig', 26: 'zesentwintig', 27: 'zevenentwintig', 28: 'achtentwintig', 29: 'negenentwintig',
    30: 'dertig', 31: 'éénendertig', 32: 'tweeëndertig', 33: 'drieëndertig', 34: 'vierendertig', 35: 'vijfendertig', 36: 'zesendertig', 37: 'zevenendertig', 38: 'achtendertig', 39: 'negenendertig',
    40: 'veertig', 41: 'éénenveertig', 42: 'tweeënveertig', 43: 'drieënveertig', 44: 'vierenveertig', 45: 'vijfenveertig', 46: 'zesenveertig', 47: 'zevenenveertig', 48: 'achtenveertig', 49: 'negenenveertig',
    50: 'vijftig', 51: 'éénenvijftig', 52: 'tweeënvijftig', 53: 'drieënvijftig', 54: 'vierenvijftig', 55: 'vijfenvijftig', 56: 'zesenvijftig', 57: 'zevenenvijftig', 58: 'achtenvijftig', 59: 'negenenvijftig', 60: 'zestig'
};

export default function numberToWords(value: number) {
    return numbers[value]
}