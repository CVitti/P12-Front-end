/**
 * It loops through the activities.sessions object and returns the lowest value of the 'kilogram'
 * property.
 * @param {object} activities - the object that contains the sessions
 * @returns {number} The minimum weight of the activities.
 */
function getMinWeight(activities){
    let minWeight = 0;
    for (const activity in activities.sessions) {
        if (minWeight === 0 || activities.sessions[parseInt(activity)].kilogram < minWeight) {
            minWeight = activities.sessions[parseInt(activity)].kilogram;
        }
    }
    return minWeight;
}
export {getMinWeight};

/**
 * It loops through the activities.sessions object and returns the highest value of the 'kilogram'
 * property.
 * @param {object} activities - the object that contains the sessions
 * @returns {number} The maximum weight of all the activities.
 */
function getMaxWeight(activities){
    let maxWeight = 0;
    for (const activity in activities.sessions) {
        if (maxWeight === 0 || activities.sessions[parseInt(activity)].kilogram > maxWeight) {
            maxWeight = activities.sessions[parseInt(activity)].kilogram;
        }
    }
    return maxWeight;
}
export {getMaxWeight};

/**
 * If there are three or more digits to the right of the decimal point, insert a comma after every
 * three digits.
 * @param {number} num - The number you want to add commas to.
 * @returns {string} the number with commas.
 */
function commafy(num) {
    let commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return commas;
}
export {commafy};