import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MessageForm from './MessageForm';
import Profile from './Profile';
import RootStack from './screens/RootStack';

const App = () => {
    return (
        <NavigationContainer>
            <RootStack />
            <Profile name="hojun" isActive={true}>
                <MessageForm />
            </Profile>
        </NavigationContainer>
    )
};

export default App;