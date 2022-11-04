/**
 * 
 * @param {*} activities Object containing all activity sessions, used to add an index to display for each session on the barChart
 * @returns number of the minimal weight from all sessions
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
 * 
 * @param {*} activities Object containing all activity sessions, used to add an index to display for each session on the barChart
 * @returns number of the maximal weight from all sessions
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
 * 
 * @param {*} num number to modify
 * @returns the number, as a string, containing a comma separator every 3 char
 */
function commafy(num) {
    let commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return commas;
}
export {commafy};