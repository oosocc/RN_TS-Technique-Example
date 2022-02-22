import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const MessageForm = () => {
    const [text, setText] = useState<string>(''); // useState 사용 시 타입 지정 (generic)
    const [lastMessage, setLastMessage] = useState<{
        message: string;
        date: Date;
    } | null>(null);

    console.log(lastMessage?.date)

    const onPress = () => {
        setLastMessage({
            message: text,
            date: new Date(),
        });
        setText('');
    };
    return (
        <View>
            <TextInput value={text} onChangeText={setText} />
            <Button title="누르세요" onPress={onPress} />
            {
                lastMessage && (
                    <View>
                        <Text>
                            마지막 메시지: {lastMessage.message} ({lastMessage.date.toLocaleString()})
                        </Text>
                    </View>
                )
            }
        </View>
    );
}

export default MessageForm;