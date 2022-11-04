/**
 * Formatting day value to display an index instead of the activity date
 */
export default class UserActivity{
    constructor(data){
        for (const session in data.sessions) {
            data.sessions[parseInt(session)].day = parseInt(session) + 1;     
        }
        this.sessions = data.sessions;
    }
}