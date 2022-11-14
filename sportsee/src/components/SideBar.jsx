//@ts-nocheck

// CSS Import
import '../styles/components/SideBar.css';

// Custom components import
import SideIcon from './SideIcon';

/**
 * SideBar of the app, containing icons and copyright
 * @returns JSX Code for the SideBar
 */
function SideBar(){
    return(
        <div className="flex flex--column sideBar">
            <div className='flex flex--column sideIconsContainer'>
                <SideIcon iconType='meditation'/>
                <SideIcon iconType='swim'/>
                <SideIcon iconType='bike'/>
                <SideIcon iconType='bodybuilding'/>
            </div>
            <div className='flex copyrightText'>
                Copyright, SportSee 2020
            </div>
        </div>
    );
}
export default SideBar;