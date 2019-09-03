import * as React from 'react';
import './indicator.css'

interface IndicatorProps {
    status?: string
}

function Indicator(props: IndicatorProps) {
    console.log(props.status, 'status')
    return (
        <div className='indicator-wrapper'>
            <div className='indicator'>
                <div className={props.status}></div>
            </div>
        </div>
    )
}

export default Indicator
