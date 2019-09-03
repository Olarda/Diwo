import * as React from 'react';
import './indicator.css'

export interface seenBy {
    avatar: string;
}

interface IndicatorProps {
    status?: string,
    seenBy?: seenBy | seenBy[]
}

function Indicator(props: IndicatorProps) {
    const {seenBy, status} = props;
    const seenBys: (seenBy | undefined)[] = Array.isArray(seenBy) ? seenBy : [seenBy];
    let content;
    if (seenBy) {
        content = seenBys.map((img, idx) => (
            img && <div className='avatar' key={idx} style={{backgroundImage: `url(${img.avatar})`}}></div>
        ))
    } else if (status) {
        content = <div className={props.status}></div>
    }

    return (
        <div className='indicator-wrapper'>
            <div className='indicator'>
                {content}
            </div>
        </div>
    )
}

export default Indicator
