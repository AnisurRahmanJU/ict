/*
Convert Decimal to Binary

Input: String or Number
Output: String
*/
function DecimalToBinary(decimal) {
    decimal = Number(decimal);
    var result = "";
    var reminder = 0;
    while (decimal != 0) {
        reminder = decimal % 2;
        decimal = Math.floor(decimal / 2);
        result = reminder + result;
    }

    if (result == "") result = "0";
    return result;
}

/*
Convert Binary to Decimal

Input: String
Output: Number
*/
function BinaryToDecimal(binary) {
    binary = binary.toString();
    var len = binary.length;
    var sum = 0;
    for (var i = len - 1, j = 0; i >= 0; i--, j++) {
        sum += (binary.charCodeAt(i) - 48) * Math.pow(2, j);
    }
    return sum;
}

/*
Make 8 length binary string
*/
function makeOctate(binaryString) {
    if (binaryString.length < 8) {
        binaryString = Array(9 - binaryString.length).join("0") + binaryString;
    }

    return binaryString;
}

/*
make fixed length by adding zero to left
*/
function makeFixedLength(valueStr, len) {
    if (valueStr.length < len) {
        valueStr = Array((len + 1) - valueStr.length).join("0") + valueStr;
    }

    return valueStr;
}

/*
Binary to  one's complement

Input: String
Output: String
*/
function onesComplement(binaryString) {
    binaryString = makeOctate(binaryString);
    var len = binaryString.length;
    for (var i = 0; i < len; i++) {
        if (binaryString.charAt(i) == '1') {
            binaryString = binaryString.slice(0, i) + '0' + binaryString.slice(i + 1, len);
        } else {
            binaryString = binaryString.slice(0, i) + '1' + binaryString.slice(i + 1, len);
        }
    }
    return binaryString;
}

/*
Binary to  two's complement (Optimized)

Input: String
Output: String
*/
function twosComplement(binaryString) {
    binaryString = makeOctate(binaryString);
    var len = binaryString.length;
    var baseToThePowerLen = Math.pow(2, len);
    var twosCompDec = baseToThePowerLen - BinaryToDecimal(binaryString);
    return makeOctate(DecimalToBinary(twosCompDec));
}

/*
Return Hexa Value

Input: Number
Output: String
*/
function getHexaValue(decimalValue) {
    if (decimalValue < 10) {
        return decimalValue;
    } else {
        return String.fromCharCode(55 + decimalValue);
    }
}
