// @ts-nocheck

// CSS Import
import "../styles/components/ChartsContainer.css"

// Custom Charts components import
import CustomBarChart from "./charts/CustomBarChart";
import CustomLineChart from "./charts/CustomLineChart";
import CustomRadarChart from "./charts/CustomRadarChart";
import CustomRadialBarChart from "./charts/CustomRadialBarChart";

// Proptypes import
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} props data (related to user's activities, sessions, performance and personal data) received from API service
 * @returns section code containing all charts
 */
function ChartsContainer({ activityProps, sessionsProps, performanceProps, userDataProps }){

    // CustomToolTip component used in charts to display value and unit on hover
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="flex flex--column">
                {payload.map((tooltipData, index) =>
                    <div className={"tooltipData " + (tooltipData.unit === "min" ? 'bold' : '')} key={index}>
                        {tooltipData.value + (tooltipData.unit === "min" ? ' ' : '') + tooltipData.unit}
                    </div>
                )}
            </div>
          );
        }
        return null;
    };

    return (
        <section className='flex flex--row flex--wrap chartSection'>
            <CustomBarChart activityProps={activityProps} CustomTooltip={CustomTooltip}/>                              
            <CustomLineChart sessionsProps={sessionsProps} CustomTooltip={CustomTooltip}/>                              
            <CustomRadarChart performanceProps={performanceProps}/>                              
            <CustomRadialBarChart userDataProps={userDataProps}/>                                               
        </section>
    );
}

ChartsContainer.propTypes = {
    activityProps : PropTypes.object.isRequired,
    sessionsProps : PropTypes.object.isRequired,
    performanceProps : PropTypes.object.isRequired,
    userDataProps : PropTypes.object.isRequired
}
export default ChartsContainer;