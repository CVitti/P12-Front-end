// @ts-nocheck

// CSS Import
import "../../styles/components/ChartsContainer.css"

// Custom Charts components import
import CustomBarChart from "./CustomBarChart";
import CustomLineChart from "./CustomLineChart";
import CustomRadarChart from "./CustomRadarChart";
import CustomRadialBarChart from "./CustomRadialBarChart";

// Proptypes import
import PropTypes from 'prop-types';

// Component Proptypes
ChartsContainer.propTypes = {
    activityProps : PropTypes.shape({
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
              day: PropTypes.number.isRequired,
              kilogram: PropTypes.number.isRequired,
              calories: PropTypes.number.isRequired
            }),
        ).isRequired
    }).isRequired,
    sessionsProps : PropTypes.shape({
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
              day: PropTypes.string.isRequired,
              sessionLength: PropTypes.number.isRequired
            }),
        ).isRequired
    }).isRequired,
    performanceProps : PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
              value: PropTypes.number.isRequired,
              kind: PropTypes.string.isRequired
            }),
        ).isRequired
    }).isRequired,
    userScoreProps: PropTypes.arrayOf(
        PropTypes.shape({
            todayScore: PropTypes.number.isRequired
        }),
    ).isRequired
}

/**
 * 
 * @param {*} param0 activityProps : Object containing data for all user sessions, sessionsProps : Object containing data for all user sessions, activityProps : Object containing all user performance data, userScoreProps : Array containing user score Data,
 * @returns JSX code for the section containing all charts
 */
function ChartsContainer({ activityProps, sessionsProps, performanceProps, userScoreProps }){

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
            <CustomRadialBarChart userScoreProps={userScoreProps}/>                                               
        </section>
    );
}
export default ChartsContainer;