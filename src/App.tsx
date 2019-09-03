import React from 'react';
import './App.css';
import Notification from "./components/notification/notification";


const statuses = ['online', 'delivered', 'seen'];
const messageState=['read', 'unread']
const notificationInfo = {
    title: 'Loredana Crisan',
    message: 'when we see feed when we',
    messageState: 'unread',
    date: 1230,
    whoSent: 'You',
    status: 'delivered',
};


const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Notification notificationInfo={notificationInfo} />
        </div>
    );
};

export default App;