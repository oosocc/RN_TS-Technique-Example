import React from 'react';
import {Button, Text, View} from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import MainTab, { MainTabNavigationScreenParams } from './MainTab';


type RootStackParamList = { // 화면을 위한 타입 선언, createNativeStackNavigator의 Generic으로 사용. 사전에 화면을 정의해야함.
    MainTab: MainTabNavigationScreenParams;
    Detail: {
        id: number;
    };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>; // Typescript 환경에서는 NavigationProp이 useNavigation의 Generic으로 설정되어 있어야 push, pop, 등의 함수를 사용할 수 있다.

const Stack = createNativeStackNavigator<RootStackParamList>();

// const HomeScreen = () => {
//     const navigation = useNavigation<RootStackNavigationProp>();
//     const onPress = () => {
//         navigation.navigate('Detail', {id: 4});
//     };
//     return (
//         <View>
//             <Text>Home</Text>
//             <Button title="Open Detail" onPress={onPress}/>
//         </View>
//     )
// }

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen = () => {
    const {params} = useRoute<DetailScreenRouteProp>();
    return (
        <View>
            <Text>Detail {params.id}</Text>
        </View>
    )
}

const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={MainTab} name="MainTab" options={{headerShown: false}} />
            <Stack.Screen component={DetailScreen} name="Detail" />
        </Stack.Navigator>
    );
}

export default RootStack;