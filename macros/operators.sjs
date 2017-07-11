'lang sweet.js';


export operator + left 13 = (left, right) => {
    return #`EdgarOperatorCheck.add(${left},${right})`
};

export operator - left 13 = (left, right) => {
    return #`EdgarOperatorCheck.substract(${left},${right})`
};
export operator / left 14 = (left, right) => {
    return #`EdgarOperatorCheck.divide(${left},${right})`
};
export operator * left 14 = (left, right) => {
    return #`EdgarOperatorCheck.multiply(${left},${right})`
};
