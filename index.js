// Code your solution in this file!
const returnFirstTwoDrivers = drivers => {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
}    

returnFirstTwoDrivers();

const returnLastTwoDrivers = drivers => {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return (drivers.slice(- 2));
}

returnLastTwoDrivers();

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) { 
    return function(fare){ return fare * multiplier};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, choice){
     return choice(drivers);
}
selectDifferentDrivers(returnFirstTwoDrivers());