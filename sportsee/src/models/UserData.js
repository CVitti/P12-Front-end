// Formatting functions import
import {commafy} from "../utils/utils.js";

/**
 * Formatting userData to display KeyData with a comma separator if > 1000 and scale score from (0 to 1) to (0 to 100)
 */
export default class UserData{
    constructor(data){
        for (const key in data.keyData) {
            data.keyData[key] = commafy(data.keyData[key]);
        }
        this.keyData = data.keyData;
        this.userInfos = data.userInfos;
        this.score = [{todayScore :(data.score * 100)}];
    }
}