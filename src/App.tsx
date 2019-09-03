import React from 'react';
import './App.css';
import Notification from "./components/notification/notification";


//подсказки
const statuses = ['new', 'delivered', 'seen'];
const messageState = ['read', 'unread'];
console.log(statuses, 'состояния индикатора');
console.log(messageState, 'состояния сообщения');

const notificationList = [
    {
        title: 'Biz Stone',
        message: 'Hey how’s it going',
        messageState: 'read',
        date: 'Mon Sep 02 2019 12:52:26',
    },
    {
        title: 'Website redesign',
        message: 'when we see feed when we',
        messageState: 'unread',
        date: 'Tue Sep 03 2019 15:32:26',
        whoSent: 'Biz Stone',
        status: 'new',
    },

    {
        title: 'Loredana Crisan',
        message: 'when we see feed when we',
        messageState: 'read',
        date: 'Tue Sep 03 2019 12:52:26',
        whoSent: 'You',
        status: 'delivered',
    },
    {
        title: 'Jeremy Green mentioned you',
        message: 'Doc or task name',
        messageState: 'unread',
        date: 'Thu, Aug 16, 2018 8:02 PM',
        status: 'new',
    },

];

const App: React.FC = () => {
    return (
        <div className="wrapper">
            {notificationList.map((item, index)=> {
               return  <Notification key={index} notificationInfo={item} />
            })}
        </div>
    );
};

export default App;