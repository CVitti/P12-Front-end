// @ts-nocheck

// CSS Import
import "../../styles/components/CardsContainer.css"

// Custom components import
import KeyDataCard from './KeyDataCard';

// React proptypes import
import PropTypes from 'prop-types';

// Component Proptypes
CardsContainer.propTypes = {
    keyDataProps: PropTypes.shape({
        calorieCount: PropTypes.string.isRequired,
        proteinCount: PropTypes.string.isRequired,
        carbohydrateCount: PropTypes.string.isRequired,
        lipidCount: PropTypes.string.isRequired
    }).isRequired
}

/**
 * Component section containing all KeyData cards from the profile page
 * @param {object} props - Object containing data props to build all cards
 * @param {object} props.keyDataProps - Object containing all user KeyData to display on cards.
 * @returns JSX code for the section containing KeyData cards
 */
function CardsContainer({keyDataProps}){
    return (
        <section className='flex flex--column keyDataSection'>
            <KeyDataCard iconFile='energy' keyData={keyDataProps.calorieCount}/>
            <KeyDataCard iconFile='chicken' keyData={keyDataProps.proteinCount}/>
            <KeyDataCard iconFile='apple' keyData={keyDataProps.carbohydrateCount}/>
            <KeyDataCard iconFile='burger' keyData={keyDataProps.lipidCount}/>
        </section>
    );
}
export default CardsContainer;