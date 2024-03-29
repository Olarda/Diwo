import React from 'react';
import './App.css';
import Notification from './components/notification/notification';


//управление состояниями
const statuses = ['new', 'delivered', 'seen'];
const messageState = ['read', 'unread'];
console.log(statuses, 'состояния индикатора');
console.log(messageState, 'состояния сообщения');

const notificationList = [
    {
        title: 'Biz Stone',
        message: 'Hey how’s it going',
        messageState: 'read',
        date: new Date('Mon Sep 02 2019 12:52:26').getTime(),
    },
    {
        title: 'Website redesign',
        message: 'when we see feed when we',
        messageState: 'unread',
        date: new Date('Wed Sep 04 2019 05:32:26').getTime(),
        whoSent: 'Biz Stone',
        status: 'new',
    },

    {
        title: 'Loredana Crisan',
        message: 'When we can see feed when we',
        messageState: 'read',
        date: new Date('Wed Sep 04 2019 8:52:26').getTime(),
        whoSent: 'You',
        status: 'delivered',
    },
    {
        title: 'Jeremy Green mentioned you',
        message: 'Doc or task name',
        messageState: 'unread',
        date: new Date('Thu, Aug 16, 2018 8:02 PM').getTime(),
        status: 'new',
    },
    {
        title: 'Marketing & Communications',
        message: 'Don’t forget to',
        messageState: 'read',
        date: new Date('Sun, Sep 01, 2019 8:02 PM').getTime(),
        whoSent: 'Wayne',
        seenBy: {avatar: './assets/avatar.png'},
    },

];

const App: React.FC = () => {
    return (
        <div className='wrapper'>
            {notificationList.map((item, index) => <Notification key={index} {...item} />)}
        </div>
    );
};

export default App;