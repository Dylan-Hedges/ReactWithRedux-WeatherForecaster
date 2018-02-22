//Used when calculating the average
import _ from 'lodash';
import React from 'react';
//Creates charts - "SparklinesReferenceLine" places an average line on chart, Sparklines" is the chart element (parent), "SparklinesLine" is additonal config (child)
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

//Creates an average - Iterate though the given vales and SUM them (using lodash), then / by the length of the array to get the AVG, then round to get a whole number (using lodash)
function average(data) {
    return _.round(_.sum(data)/data.length);
}

//Displays chart on screen - "Sparklines" set the chart size and display passed in data, "SparklinesLine" the line color, "SparklinesReferenceLine" displays an "average" line on screen, "{average(props.data)}" takes in the data, passes it to the average helper function and displays the result on screen
export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}