// @ts-nocheck

// CSS Import
import "../../styles/components/charts/CustomRadialBarChart.css"

import { ResponsiveContainer, RadialBarChart } from 'recharts'; // Global Charts components
import { PolarAngleAxis} from 'recharts'; // Common components
import { RadialBar } from 'recharts'; // Individual components

// Proptypes import
import PropTypes from 'prop-types';

// Component Proptypes
CustomRadialBarChart.propTypes = {
    userScoreProps: PropTypes.arrayOf(
        PropTypes.shape({
            todayScore: PropTypes.number.isRequired
        }),
    ).isRequired
}

/**
 * 
 * @param {*} param0 userScoreProps : Array containing user score Data.
 * @returns JSX code for the User Score RadialBarChart
 */
function CustomRadialBarChart({userScoreProps}){
    return(
        <div className='chartContainer smallWidthChart radialChart'>      
            <h3 className='radialChartTitle'>Score</h3>          
            <ResponsiveContainer>
                <RadialBarChart 
                    cx="50%" 
                    cy="50%" 
                    innerRadius="70%" 
                    barSize={10} 
                    startAngle={90}
                    endAngle={450}
                    data={userScoreProps}> 
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />
                    <RadialBar
                        dataKey="todayScore"
                        fill="#FF0000"
                        cornerRadius={5}
                    />                        
                </RadialBarChart>
            </ResponsiveContainer>
            {/* Label in the center of the chart */}
            <div className="flex scoreLabelContainer">
                <div className="flex flex--column scoreLabelCircle">
                    <p className="flex flex--column scoreLabel">
                        <span className="bold">{userScoreProps[0].todayScore}%</span>
                        <span className="scoreDesc">de votre objectif</span>                        
                    </p>
                </div>                    
            </div>
        </div>
    );
}
export default CustomRadialBarChart;