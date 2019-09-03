import * as React from 'react';

import {dateFormatting} from '../../utils/index';

interface DateProps {
    date: string
}

function Date(props: DateProps) {
    const time = dateFormatting(props.date);
    return (
        <div className='date'>
            <div>{time}</div>
        </div>
    )
}

export default Date
