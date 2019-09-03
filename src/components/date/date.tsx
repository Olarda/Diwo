import * as React from 'react';

interface DateProps {
    date: number
}

function Date(props: DateProps) {

    return (
        <div className='date'>
            <div>{props.date}</div>
        </div>
    )
}

export default Date
