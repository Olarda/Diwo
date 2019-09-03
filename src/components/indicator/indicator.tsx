import * as React from 'react';
import './indicator.css'
interface IndicatorProps {
    status?: string
}


function Indicator(props: IndicatorProps) {
    console.log(props.status, 'status')
    return (
        <div className={`indicator ${props.status}`}></div>
    )
}

export default Indicator
