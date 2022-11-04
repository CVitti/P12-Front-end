// Formatting functions import
import {commafy} from "../utils/utils.js";

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