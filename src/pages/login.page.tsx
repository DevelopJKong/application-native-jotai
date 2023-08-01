import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { styled } from 'nativewind';
import { writableLoadableAtom } from '../atoms/main.atom';
import { useAtom, useSetAtom } from 'jotai';

const SView = styled(
  View, //
  'flex-1 items-center justify-center',
);

const SButton = styled(TouchableOpacity, 'bg-blue-500 w-2/3 h-12 items-center justify-center rounded-md');

const STextBlack = styled(
  Text, //
  'text-white',
);

const SInput = styled(
  TextInput, //
  'w-2/3 border-2 border-gray-400 rounded-md mb-4 border-2 border-blue-400 p-1',
);

const Login = () => {
  // ! jotai state 모음
  const setLogin = useSetAtom(writableLoadableAtom);

  // !  기본 state 모음
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onValid = () => {
    if (email === '') return alert('이메일을 입력해주세요');
    if (password === '') return alert('비밀번호를 입력해주세요');

    if (email === 'jeongbin@naver.com' && password === '1234') {
      alert('로그인 성공');
      setLogin({
        token: '1234',
        email,
      });
    }
  };

  return (
    <SView>
      <SInput
        placeholder='이메일을 입력해주세요'
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <SInput
        placeholder='비밀번호를 입력해주세요'
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <SButton onPress={onValid}>
        <STextBlack>로그인</STextBlack>
      </SButton>
    </SView>
  );
};

export default Login;
