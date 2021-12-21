//function findMatching(drivers, string) {
//    return drivers.filter(function(driver) {
//        if (driver.toLowerCase() === string.toLowerCase()) {
//            return drivers
//        }
//    })
//}

//Refractor into an arrow function within the function declaration.

function findMatching(drivers, string) {
    return drivers.filter(
        (driver) => driver.toLowerCase() === string.toLowerCase()
    );
}

//function fuzzyMatch(drivers, string) {
//    return drivers.filter(function(driver) {
//        if (driver[0] === string[0]) {
//            return drivers
//        }
//    })
//}

//Refractor into an arrow function within the function declaration.

function fuzzyMatch(drivers, string) {
    return drivers.filter(
        (driver) => driver[0] === string[0]  
    );
}

//function matchName(drivers, string) {
//    return drivers.filter(function(driver){
//        if (driver.name === string) {
//            return drivers
//        }
//    })
//}

function matchName(drivers, string) {
    return drivers.filter(
        (driver) => driver.name === string
    );
}