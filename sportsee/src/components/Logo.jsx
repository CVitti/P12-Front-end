// @ts-nocheck

// File import
import logoFile from "../assets/logo.svg";

//CSS Import
import '../styles/components/Logo.css'

/**
 * Logo contained in the app Header
 * @returns JSX Code for the logo
 */
function Logo() {
    return(
        <img src={logoFile} alt="SportSee logo" className="logo"></img>
    );
}
export default Logo;