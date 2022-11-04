// @ts-nocheck

// CSS Import
import "../styles/components/CardsContainer.css"

// Custom components import
import KeyDataCard from '../components/KeyDataCard';

// React proptypes import
import PropTypes from 'prop-types';

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

CardsContainer.propTypes = {
    keyDataProps: PropTypes.object.isRequired,
}

export default CardsContainer;