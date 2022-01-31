import React from 'react';
import { Text } from 'react-native';
import Profile from './Profile';

const App = () => {
    return (
        <Profile name="hojun" isActive={true}>
            <Text>Hello world</Text>
        </Profile>
    )
};

export default App;