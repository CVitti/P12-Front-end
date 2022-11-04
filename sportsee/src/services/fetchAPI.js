import UserData from "../models/UserData";
import UserSession from "../models/UserSession";
import UserActivity from "../models/UserActivity";
import UserPerformance from "../models/UserPerformance";

/**
 * 
 * @param {*} userId collected from URL before calling function
 * @returns user data as an object to be displayed
 */
async function getUserDataById(userId) {
    const response = await fetch("http://localhost:3000/user/" + userId);
    const data = await response.json();
    return new UserData(data.data);
}
export {getUserDataById};

/**
 * 
 * @param {*} userId collected from URL before calling function
 * @returns user performance data as an object to be displayed
 */
 async function getUserPerfById(userId) {
    const response = await fetch("http://localhost:3000/user/" + userId + "/performance");
    const data = await response.json();        
    return new UserPerformance(data.data);
}
export {getUserPerfById};

/**
 * 
 * @param {*} userId collected from URL before calling function
 * @returns user activity data as an object to be displayed
 */
 async function getUserActivityById(userId) {
    const response = await fetch("http://localhost:3000/user/" + userId + "/activity");
    const data = await response.json();        
    return new UserActivity(data.data);
}
export {getUserActivityById};

/**
 * 
 * @param {*} userId collected from URL before calling function
 * @returns user average sessions data as an object to be displayed
 */
 async function getUserAvgSessions(userId) {
    const response = await fetch("http://localhost:3000/user/" + userId + "/average-sessions");
    const data = await response.json();        
    return new UserSession(data.data)
}
export {getUserAvgSessions};