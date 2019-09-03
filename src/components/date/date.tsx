import * as React from 'react';
import './date.css';
import {dateFormatting} from '../../utils/index';

interface DateProps {
    date: number;
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
