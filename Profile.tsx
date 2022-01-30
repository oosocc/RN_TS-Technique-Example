import { View, Text } from 'react-native';
import React from 'react';

interface Props {
    name: string;
}

const App = ({name}: Props) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
};

export default App;