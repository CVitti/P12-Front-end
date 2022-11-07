// @ts-nocheck

// CSS Import
import "../../styles/components/charts/CustomRadarChart.css"

// Charts components import
import { ResponsiveContainer, RadarChart } from 'recharts'; // Global Charts components
import { PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'; // Common components
import { Radar } from 'recharts'; // Individual components

// Proptypes import
import PropTypes from 'prop-types';

// Component Proptypes
CustomRadarChart.propTypes = {
    performanceProps : PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
              value: PropTypes.number.isRequired,
              kind: PropTypes.string.isRequired
            }),
        ).isRequired
    }).isRequired
}

/**
 * 
 * @param {*} param0 activityProps : Object containing all user performance data.
 * @returns JSX code for the Performance RadarChart
 */
function CustomRadarChart({performanceProps}){
    return(
        <div className='flex chartContainer smallWidthChart radarChart'>
            <ResponsiveContainer>
                <RadarChart 
                    innerRadius={10}
                    outerRadius={60} 
                    data={performanceProps.data}
                    >
                    <PolarGrid 
                        radialLines={false}
                        polarRadius={[10, 20, 40, 60]}
                    />
                    <PolarAngleAxis 
                        dataKey='kind' 
                        stroke='#FFFFFF' 
                        fontSize={10} 
                        tickLine={false} 
                        tick={{ dy: 4 }}
                    />
                    <PolarRadiusAxis 
                        domain={[0, "auto"]} 
                        tick={false} 
                        axisLine={false}
                    />
                    <Radar 
                        dataKey='value' 
                        stroke='#FF0000' 
                        fill='#FF0000' 
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>                             
        </div>
    );
}
export default CustomRadarChart;