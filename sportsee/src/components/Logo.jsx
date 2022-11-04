// @ts-nocheck

// File import
import logoFile from "../assets/logo.svg";

//CSS Import
import '../styles/components/Logo.css'

/**
 * 
 * @returns Code for the logo picture
 */
function Logo() {
    return(
        <img src={logoFile} alt="SportSee logo" className="logo"></img>
    );
}
export default Logo;