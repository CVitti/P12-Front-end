// @ts-nocheck

// CSS Import
import "../../styles/components/charts/CustomRadialBarChart.css"

import { ResponsiveContainer, RadialBarChart } from 'recharts'; // Global Charts components
import { PolarAngleAxis} from 'recharts'; // Common components
import { RadialBar } from 'recharts'; // Individual components

// Proptypes import
import PropTypes from 'prop-types';

function CustomRadialBarChart({userDataProps}){
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
                        data={userDataProps.score}> 
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
                <div className="flex scoreLabelContainer">
                    <div className="flex flex--column scoreLabelCircle">
                        <p className="flex flex--column scoreLabel">
                            <span className="bold">{userDataProps.score[0].todayScore}%</span>
                            <span className="scoreDesc">de votre objectif</span>                        
                        </p>
                    </div>                    
                </div>
            </div>
    );
}

CustomRadialBarChart.propTypes = {
    userDataProps : PropTypes.object.isRequired
}

export default CustomRadialBarChart;