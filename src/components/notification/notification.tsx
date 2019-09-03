import * as React from 'react';
import './notification.css'
import Ellipse from './../ellipse/ellipse';
import Message from './../message/message';
import Indicator from "../indicator/indicator";


interface NotificationProps {
    notificationInfo: {
        title: string
        whoSent?: string
        message: string
        messageState: string
        date: number
        status?: string
    }
}

function Notification(props: NotificationProps) {

    return  (
        <div className='notification'>
            <Ellipse/>
            <Message title={props.notificationInfo.title}
                     message={props.notificationInfo.message}
                     messageState={props.notificationInfo.messageState}
                     whoSent={props.notificationInfo.whoSent}
                     date={props.notificationInfo.date}/>
            <Indicator status={props.notificationInfo.status}/>
        </div>
    )
}

export default Notification
