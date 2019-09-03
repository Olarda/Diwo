import * as React from 'react';
import Date from "../date/date";

interface MessageProps {
    title: string
    whoSent?: string
    message: string,
    date: number

}

function Message(props: MessageProps) {
    const textMessage = `${props.whoSent + ':'}${props.message}`;

    return (
        <div className='message'>
            <div>{props.title}</div>

            <div>
                <div>{textMessage}</div>
                <Date date={props.date}/>
            </div>
        </div>
    )
}

export default Message
