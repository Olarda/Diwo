import * as React from 'react';
import './indicator.css'
interface IndicatorProps {
    status?: string
}


function Indicator(props: IndicatorProps) {
    console.log(props.status, 'status')
    return (
         <div className='indicator'>
            <div className={props.status}></div>
        </div>
    )
}

export default Indicator
