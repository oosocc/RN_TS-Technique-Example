import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

interface Props {
    name: string;
    isActive?: boolean; // 옵셔널 Props, 생략 가능
    image: string;
    children: React.ReactNode; // children props
}

const Profile = ({name, isActive, image, children}: Props) => {
    return (
        <View style={isActive && styles.activeStyle}>
            <Image style={{width: '65%', height: '30%'}} source={{uri: image}} />
            <Text>{name}</Text>
            <View>{children}</View>
        </View>
    );
};

Profile.defaultProps = {
    image: 'https://picsum.photos/200', // props가 없을 시 defaultProps로 설정 가능. interface에 ? 붙여도 되나 둘 다 언젠가 deprecated 될 수 있음.
}

const styles = StyleSheet.create({
    activeStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default Profile;