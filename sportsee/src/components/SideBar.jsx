//@ts-nocheck

// CSS Import
import '../styles/components/SideBar.css';

// Custom components import
import SideIcon from './SideIcon';

/**
 * 
 * @returns Code for the sidebar, containing icons components
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