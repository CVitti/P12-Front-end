// Formatting function import
import UserData from "../models/UserData";
import UserSession from "../models/UserSession";
import UserActivity from "../models/UserActivity";
import UserPerformance from "../models/UserPerformance";


/**
 * It fetches data from the server, parses it as JSON, and returns a new UserData object if the
 * response was successful, otherwise it throws an error.
 * @param {number} userId - The id of the user you want to get the data for.
 * @returns A Promise that resolves to a UserData object.
 */
async function getUserDataById(userId) {
    const response = await fetch("http://localhost:3000/user/" + userId);
    const data = await response.json();
    if (response.ok) {
        return new UserData(data.data); 
    }else{
        throw new Error(data);
    }    
}
export {getUserDataById};



/**
 * It fetches data from the server, parses it as JSON, and returns a new UserPerformance object if the
 * response is ok, otherwise it throws an error.
 * @param {number} userId - The id of the user you want to get the performance for.
 * @returns A promise that resolves to a UserPerformance object.
 */
async function getUserPerfById(userId) {
    const response = await fetch("http://localhost:3000/user/" + userId + "/performance");
    const data = await response.json();        
    if (response.ok) {
        return new UserPerformance(data.data);
    }else{
        throw new Error(data);
    }  
}
export {getUserPerfById};


/**
 * It fetches data from the server, parses it as JSON, and returns a new UserActivity object if the
 * response is ok, otherwise it throws an error.
 * @param {number} userId - The id of the user you want to get the activity for.
 * @returns A promise that resolves to a UserActivity object.
 */
async function getUserActivityById(userId) {
    const response = await fetch("http://localhost:3000/user/" + userId + "/activity");
    const data = await response.json();
    if (response.ok) {
        return new UserActivity(data.data);
    }else{
        throw new Error(data);
    }  
}
export {getUserActivityById};


/**
 * It fetches the average time of sessions for a user from the server and returns a UserSession
 * object.
 * @param {number} userId - The id of the user you want to get the sessions for.
 * @returns A promise that resolves to a UserSession object.
 */
async function getUserAvgSessions(userId) {
    const response = await fetch("http://localhost:3000/user/" + userId + "/average-sessions");
    const data = await response.json();        
    if (response.ok) {
        return new UserSession(data.data);
    }else{
        throw new Error(data);
    }  
}
export {getUserAvgSessions};