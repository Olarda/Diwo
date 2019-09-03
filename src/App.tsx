import React from 'react';
import './App.css';
import Notification from "./components/notification/notification";

const notificationInfo = {
    title: 'Loredana Crisan',
    message: 'when we see feed when we',
    date: 1230,
    whoSent: 'You',
    status: 'online',
};


const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Notification notificationInfo={notificationInfo} />
        </div>
    );
};

export default App;