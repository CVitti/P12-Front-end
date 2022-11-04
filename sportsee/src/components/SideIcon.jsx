//@ts-nocheck

// CSS import
import "../styles/components/SideIcon.css"

// File import
import meditation from "../assets/meditation.svg";
import swim from "../assets/swim.svg";
import bike from "../assets/bike.svg";
import bodybuilding from "../assets/bodybuilding.svg";

// React proptypes import
import PropTypes from 'prop-types';

// Component PropTypes
SideIcon.propTypes = {
    iconType : PropTypes.string.isRequired,
}

/**
 * 
 * @param {*} iconType Type of icon that will be displayed in the sideBar (as a string)
 * @returns Code for a sidebar icon
 */
function SideIcon({iconType}){
    return(
        <div className='flex sideIcon'>
            {iconType === "meditation" && <img src={meditation} alt="meditationIcon"></img>}
            {iconType === "swim" && <img src={swim} alt="swimIcon"></img>}
            {iconType === "bike" && <img src={bike} alt="bikeIcon"></img>}
            {iconType === "bodybuilding" && <img src={bodybuilding} alt="meditationIcon"></img>}            
        </div>
    );
}
export default SideIcon;