import * as React from 'react';
import './message.css';
import Date from "../date/date";

interface MessageProps {
    title: string
    whoSent?: string
    message: string,
    messageState: string
    date: string

}

function Message(props: MessageProps) {
    const textMessage = `${props.whoSent + ':'} ${props.message}`;

    return (
        <div className='message'>
            <div className='title'>{props.title}</div>

            <div className= {`message-desc ${props.messageState}`}>
                <div>{textMessage}</div>
                <Date date={props.date}/>
            </div>
        </div>
    )
}

export default Message
