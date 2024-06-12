

const add = (n1, n2) => n1 + n2;

const addition = add(10, 5);

const outerFn = () => {
    const innerFn = () => {}

    return innerFn;
}

const innerRef = outerFn();

innerRef();

const counter = (initialValue) => {
    return () => ++initialValue;
}

const countFrom10 = counter(10);
countFrom10(); // 11
countFrom10(); // 12

const countFrom15 = counter(15);
countFrom10(); // 13
countFrom15(); // 16

// factory pattern
const loanFactory = (r) => {
    return [
        (p, n) => p * n * r / 100,
        (newRate) => r = newRate 
    ];
}

const [carEMI, carRateUpater] = loanFactory(8);
const [homeEMI, homeRateUpater] = loanFactory(10);
const [personalEMI, personalRateUpater] = loanFactory(12);

carEMI(12000, 12); // 
homeEMI(12000, 12); // 