
EdgarOperatorCheck = {
    add(a, b) {
        if (a._operatorAdd) return a._operatorAdd(b)
        else return a + b
    },
    substract(a, b) {
        if (a._operatorSubstract) return a._operatorSubstract(b)
        else return a - b
    },
    divide(a, b) {
        if (a._operatorDivide) return a._operatorDivide(b)
        else return a / b
    },
    multiply(a, b) {
        if (a._operatorMultiply) return a._operatorMultiply(b)
        else return a * b
    }
}
