//@ts-nocheck

// CSS Import
import  "../styles/components/KeyDataCard.css";
// File import
import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import apple from "../assets/apple.svg";
import burger from "../assets/burger.svg";

// React proptypes import
import PropTypes from 'prop-types';

function KeyDataCard({iconFile, keyData}) {
    let unit = "no unit";
    let keyDataName = 'no name';
    switch (iconFile) {
        case "energy":
            unit = "kCal";
            keyDataName = "Calories";
            break;
        
        case "chicken":
            unit = "g";
            keyDataName = "Proteines";
            break;

        case "apple":
            unit = "g";
            keyDataName = "Glucides";
            break;

        case "burger":
            unit = "g";
            keyDataName = "Lipides";
            break;

        default:
            break;
    }

    return (
        <div className="flex flex--row cardBg">
            <div className="flex cardIconBg">
                {iconFile === "energy" && <img src={energy} alt="Calories brulées dans la journée" className={iconFile}></img>}
                {iconFile === "chicken" && <img src={chicken} alt="Protéines de la journée" className={iconFile}></img>}
                {iconFile === "apple" && <img src={apple} alt="Glucides dans la journée" className={iconFile}></img>}
                {iconFile === "burger" && <img src={burger} alt="Lipides dans la journée" className={iconFile}></img>}
            </div>
            <div className="flex flex--column">
                <div className="keyData">{keyData}{unit}</div>
                <div className="keyDataName">{keyDataName}</div>
            </div>
        </div>
    );
}

KeyDataCard.propTypes = {
    iconFile: PropTypes.string.isRequired,
    keyData: PropTypes.string.isRequired
}

export default KeyDataCard;