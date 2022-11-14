//@ts-nocheck

// CSS Import
import  "../../styles/components/KeyDataCard.css";

// File import
import energy from "../../assets/energy.svg";
import chicken from "../../assets/chicken.svg";
import apple from "../../assets/apple.svg";
import burger from "../../assets/burger.svg";

// React proptypes import
import PropTypes from 'prop-types';

// Component Proptypes
KeyDataCard.propTypes = {
    iconFile: PropTypes.string.isRequired,
    keyData: PropTypes.string.isRequired
}

/**
 * Component used to display a KeyData with its value, unit and icon
 * @param {object} props - Object containing data props to build all cards
 * @param {string} props.iconFile - Matching the icon name to display
 * @param {string} props.keyData - Keydata number (with comma if > 1000), parsed as string in any case
 * @returns JSX code for the section containing KeyData cards
 */
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
                {iconFile === "energy" && <img src={energy}  alt="Calories brulées dans la journée" className={iconFile}></img>}
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
export default KeyDataCard;