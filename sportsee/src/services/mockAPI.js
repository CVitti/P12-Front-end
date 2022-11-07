// Formatting function import
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
    const response = await fetch("/data.json");
    const data = await response.json();
    if (response.ok) {
        return new UserData(data.USER_MAIN_DATA.find(infos => infos.id === parseInt(userId))); 
    }else{
        throw new Error(data);
    }    
}
export {getUserDataById};

/**
 * 
 * @param {*} userId collected from URL before calling function
 * @returns user performance data as an object to be displayed
 */
async function getUserPerfById(userId) {
    const response = await fetch("/data.json");
    const data = await response.json();        
    if (response.ok) {
        return new UserPerformance(data.USER_PERFORMANCE.find(infos => infos.userId === parseInt(userId)));
    }else{
        throw new Error(data);
    }  
}
export {getUserPerfById};

/**
 * 
 * @param {*} userId collected from URL before calling function
 * @returns user activity data as an object to be displayed
 */
 async function getUserActivityById(userId) {
    const response = await fetch("/data.json");
    const data = await response.json();
    if (response.ok) {
        return new UserActivity(data.USER_ACTIVITY.find(infos => infos.userId === parseInt(userId)));
    }else{
        throw new Error(data);
    }  
}
export {getUserActivityById};

/**
 * 
 * @param {*} userId collected from URL before calling function
 * @returns user average sessions data as an object to be displayed
 */
 async function getUserAvgSessions(userId) {
    const response = await fetch("/data.json");
    const data = await response.json();        
    if (response.ok) {
        return new UserSession(data.USER_AVERAGE_SESSIONS.find(infos => infos.userId === parseInt(userId)));
    }else{
        throw new Error(data);
    }  
}
export {getUserAvgSessions};