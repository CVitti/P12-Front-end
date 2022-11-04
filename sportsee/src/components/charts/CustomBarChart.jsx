// @ts-nocheck

// CSS Import
import "../../styles/components/charts/CustomBarChart.css"

// Charts components import
import { ResponsiveContainer, BarChart } from 'recharts'; // Global Charts components
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'; // Common components
import { Bar } from 'recharts'; // Individual components

// Utility functions import
import { getMinWeight, getMaxWeight } from "../../utils/utils.js";

// Proptypes import
import PropTypes from 'prop-types';

function CustomBarChart({activityProps, CustomTooltip}){

    return(
            <div className='chartContainer fullWidthChart barChart'>
                <h3 className='barChartTitle'>Activité quotidienne</h3>
                <ResponsiveContainer height="100%" width="100%">
                    <BarChart
                        data={activityProps.sessions}
                        margin={{
                            top: 20,
                            right: 40,
                            left: 50,
                            bottom: 25,
                        }}
                        barGap={8}>
                        <CartesianGrid 
                            strokeDasharray="3" 
                            vertical={false}
                            verticalPoints={[(((getMaxWeight(activityProps) + 1) + (getMinWeight(activityProps) - 2)) / 2), getMaxWeight(activityProps) + 1]}                  
                        />
                        <XAxis 
                            dataKey="day" 
                            stroke="#9B9EAC" 
                            tickLine={false}
                            tickMargin={15}
                        />
                        <YAxis 
                            yAxisId="right" 
                            orientation="right" 
                            stroke="#9B9EAC" 
                            domain={[getMinWeight(activityProps) - 2, getMaxWeight(activityProps) + 1]} 
                            tickLine={false} 
                            axisLine={false} 
                            tickCount={3}
                            tickMargin={30}
                        />
                        <YAxis 
                            yAxisId="left" 
                            orientation="left" 
                            stroke="#9B9EAC" 
                            domain={['dataMin - 100', 'dataMax + 50']} 
                            hide 
                        />                                
                        <Tooltip 
                            cursor={{ fill:'rgba(196, 196, 196, 0.5)' }}
                            content={<CustomTooltip />}
                            wrapperStyle={{ outline: 'none', backgroundColor:'#E60000', color:'#FFFFFF' }}
                        />
                        <Legend 
                            verticalAlign="top"
                            align='right'
                            wrapperStyle={{ lineHeight: '40px'}} 
                            iconType="circle"
                            height={70} 
                        />
                        <Bar 
                            yAxisId="right" 
                            dataKey="kilogram" 
                            fill="#282D30"
                            radius={[10,10,0,0]}
                            name="Poids (kg)"
                            barSize={9}
                            unit="kg"
                        />
                        <Bar 
                            yAxisId="left" 
                            dataKey="calories" 
                            fill="#E60000" 
                            radius={[10,10,0,0]} 
                            name="Calories brulées (kCal)"
                            barSize={9}
                            unit="kCal"
                        />
                    </BarChart>
                </ResponsiveContainer> 
            </div>
    );
}

CustomBarChart.propTypes = {
    activityProps : PropTypes.object.isRequired,
    CustomTooltip : PropTypes.func.isRequired
}

export default CustomBarChart;