/**
 * Formatting session day value to display first capital letter instead of index
 */
export default class UserSession{
    /**
     * @construct UserSession 
     * @param {object} data - User Sessions
     */
    constructor(data){
        const week = {
            "0": "Dimanche",
            "1": "Lundi",
            "2": "Mardi",
            "3": "Mercredi",
            "4": "Jeudi",
            "5": "Vendredi",
            "6": "Samedi",
        };
        for (const session in data.sessions) {
            // Day index modulo 7 (0 = Sunday, 6, Saturday), only first capital letter, french translation
            data.sessions[parseInt(session)].day = week[(data.sessions[parseInt(session)].day % 7)].charAt(0).toUpperCase();     
        }
        this.sessions = data.sessions;
    }
}