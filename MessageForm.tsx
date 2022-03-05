import React, {useEffect, useRef, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const MessageForm = () => {
    const [text, setText] = useState<string>(''); // useState 사용 시 타입 지정 (generic)
    const [lastMessage, setLastMessage] = useState<{
        message: string;
        date: Date;
    } | null>(null); // useState 객채 사용 공부

    const nextId = useRef<number>(1); // useRef 타입 추론, useRef 공부
    const inputRef = useRef<TextInput | null>(null);

    console.log('lastMessage : ', lastMessage?.date)
    console.log('nextId : ', nextId)
    console.log('inputRef : ', inputRef.current)

    const onPress = () => {
        setLastMessage({
            message: text,
            date: new Date(),
        });
        setText('');
        nextId.current += 1;
    };

    /* inputRef는 처음 렌더링 시 null이고, 한번 렌더링 된 뒤에는 TextInput의 인스턴스가 담긴다. */
    useEffect(() => {
        if (!inputRef.current) {
            return;
        } // inputRef의 유효성을 확인하는 코드, 주석 처리 시 다른 대안으로 옵셔널 체이닝을 사용하여 ?를 붙여야 한다.
        inputRef.current.focus();
    }, []);

    return (
        <View>
            <TextInput value={text} onChangeText={setText} ref={inputRef}/>
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