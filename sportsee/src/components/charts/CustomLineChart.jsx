// @ts-nocheck

// CSS Import
import "../../styles/components/charts/CustomLineChart.css"

// Charts components import
import { ResponsiveContainer, LineChart} from 'recharts'; // Global Charts components
import { XAxis, YAxis, Tooltip } from 'recharts'; // Common components
import { Line } from 'recharts'; // Individual components

// Proptypes import
import PropTypes from 'prop-types';

// Component Proptypes
CustomLineChart.propTypes = {
    sessionsProps : PropTypes.shape({
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
              day: PropTypes.string.isRequired,
              sessionLength: PropTypes.number.isRequired
            }),
        ).isRequired
    }).isRequired,
    CustomTooltip : PropTypes.func.isRequired
}

/**
 * Chart displaying user sessions
 * @param {object} props - Object containing data props to build the chart
 * @param {object} props.sessionsProps - Object containing data for all user sessions
 * @param {function} props.CustomTooltip - Function used to custom chart tooltip
 * @returns JSX code for the Average Session LineChart
 */
function CustomLineChart({sessionsProps, CustomTooltip}){
    return(
        <div className='chartContainer smallWidthChart lineChart'>
                <h3 className='lineChartTitle'>Durée moyenne des sessions</h3>
                <ResponsiveContainer>
                    <LineChart 
                        data={sessionsProps.sessions} 
                        margin={{ top: 80, right: 30, bottom: 40, left: 30 }}>
                        <XAxis 
                            dataKey="day"
                            tickLine={false} 
                            axisLine={false}
                            tickMargin={30}
                            stroke="#FFFFFF" 
                            fillOpacity={0.5}
                        />
                        <YAxis 
                            dataKey="sessionLength"
                            tickLine={false} 
                            axisLine={false}
                            domain={['dataMin - 2', 'dataMax']}
                            hide
                        />
                        <Tooltip 
                            cursor={false}
                            content={<CustomTooltip />}
                            wrapperStyle={{ outline: 'none', backgroundColor:'#FFFFFF', color:'#000000' }}
                        />
                        <Line 
                            type="natural" 
                            dataKey="sessionLength" 
                            stroke="#FFFFFF" 
                            dot={false} 
                            strokeWidth={2}
                            unit="min"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
    );
}
export default CustomLineChart;