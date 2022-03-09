import { View, Text, Button } from 'react-native';
import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams, useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from './RootStack';

type MainTabParamList = {
    Home: undefined;
    Account: undefined;
};

export type MainTabNavigationProp = CompositeNavigationProp<RootStackNavigationProp, BottomTabNavigationProp<MainTabParamList>>;

export type MainTabNavigationScreenParams = NavigatorScreenParams<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

const HomeScreen = () => {
    const navigation = useNavigation<RootStackNavigationProp>();
    const onPress = () => {
        navigation.navigate('Detail', {id: 4});
    };
    return (
        <View>
            <Text>Home</Text>
            <Button title="Open Detail" onPress={onPress}/>
        </View>
    );
}

const AccountScreen = () => {
    return (
        <View>
            <Text>Account</Text>
        </View>
    );
}

const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}

export default MainTab;

// type AccountStackParamList = {
//     Account: undefined;
//     Setting: undefined;
// }

// export type AccountStackNavigationProp = CompositeNavigationProp<MainTabNavigationProp, StackNavigationProp<AccountStackParamList>>;


// import { View, Text, Button } from 'react-native';
// import React from 'react';
// import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { CompositeNavigationProp, NavigatorScreenParams, useNavigation } from '@react-navigation/native';
// import { RootStackNavigationProp } from './RootStack';

// type MainTabParamList = {
//     Home: undefined;
//     Account: undefined;
// };

// type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

// const Tab = createBottomTabNavigator<MainTabParamList>();