'lang sweet.js';


operator + left 13 = (left, right) => {
    return #`EdgarOperatorCheck.add(${left},${right})`
};

operator - left 13 = (left, right) => {
    return #`EdgarOperatorCheck.substract(${left},${right})`
};
operator / left 14 = (left, right) => {
    return #`EdgarOperatorCheck.divide(${left},${right})`
};
operator * left 14 = (left, right) => {
    return #`EdgarOperatorCheck.multiply(${left},${right})`
};
