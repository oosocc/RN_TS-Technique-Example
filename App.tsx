import React from 'react';
import { Text } from 'react-native';
import MessageForm from './MessageForm';
import Profile from './Profile';

const App = () => {
    return (
        <Profile name="hojun" isActive={true}>
            <MessageForm />
        </Profile>
    )
};

export default App;