//@ts-nocheck

// Custom Components import
import Logo from "./Logo"

// React/React-router components import
import { NavLink } from 'react-router-dom';

// CSS Import
import '../styles/components/Header.css';

/**
 * 
 * @returns Code for the header, contains the logo picture and navigation links
 */
function Header(){
 return (
    <header className="flex flex--row">
        <Logo />
        <nav className="flex flex--row">
            <NavLink to="#">
                Accueil
            </NavLink>
            <NavLink to="#">
                Profil
            </NavLink>
            <NavLink to="#">
                Réglages
            </NavLink>
            <NavLink to="#">
                Communauté
            </NavLink>
        </nav>        
    </header>    
 );
}

export default Header;