module.exports = function toReadable (number) {
    const arrNumbersUntilTwenty = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    }
    const arrTenthsNumbers = {
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    }
    if(number<=19 ){
        return arrNumbersUntilTwenty[number.toString()]
    }else if(number === 20 || number ===30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90){
        return arrTenthsNumbers[number.toString()]
    }else if(number>20 && number < 100){
        const arrNumbers = number.toString().split('')
        const endingTy = `${ arrNumbers[0]}0`
        return `${arrTenthsNumbers[endingTy]} ${arrNumbersUntilTwenty[arrNumbers[1]]}`
    }else if(number>= 100){
        const arrNumbers = number.toString().split('')
        const copyArrNumbers = Number([...arrNumbers].splice(1,).join(''))
        const endingTy = `${ arrNumbers[1]}0`
        if(copyArrNumbers>=10 && copyArrNumbers <= 19){
            return `${arrNumbersUntilTwenty[arrNumbers[0]]} hundred ${arrNumbersUntilTwenty[copyArrNumbers.toString()]}`
        }
        if(arrNumbers[1] === '0' && arrNumbers[2] === '0' ){
            return `${arrNumbersUntilTwenty[arrNumbers[0]]} hundred`
        }
        else if(arrNumbers[1] === '0'){
            return `${arrNumbersUntilTwenty[arrNumbers[0]]} hundred ${arrNumbersUntilTwenty[arrNumbers[2]]}`
        }else if(arrNumbers[2] === '0'){
            return `${arrNumbersUntilTwenty[arrNumbers[0]]} hundred ${arrTenthsNumbers[endingTy]}`
        }else{
            return   `${arrNumbersUntilTwenty[arrNumbers[0]]} hundred ${arrTenthsNumbers[endingTy]} ${arrNumbersUntilTwenty[arrNumbers[2]]}`
        }
    }
}
