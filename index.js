// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo']));
 
 const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier;
 };
 console.log(createFareMultiplier(2)(10));
 
 const fareDoubler = createFareMultiplier(2);
 console.log(fareDoubler(10));
 
 const fareTripler = createFareMultiplier(3);
 console.log(fareTripler(10));

 

const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
};

// Example usage:
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Amari', 'Mo']