import * as React from 'react';
import './notification.css'
import Ellipse from './../ellipse/ellipse';
import Message from './../message/message';
import Indicator from '../indicator/indicator';
import {seenBy} from '../indicator/indicator'

interface NotificationProps {
    title: string;
    whoSent?: string;
    message: string;
    messageState: string;
    date: number;
    status?: string;
    seenBy?: seenBy | seenBy[]
}

function Notification(props: NotificationProps) {
    const { title, message, messageState, whoSent, date, status, seenBy } = props;

    return  (
        <div className='notification'>
            <Ellipse/>
            <Message
                title={title}
                message={message}
                messageState={messageState}
                whoSent={whoSent}
                date={date}
            />
            <Indicator status={status}  seenBy={seenBy}/>
        </div>
    )
}

export default Notification
