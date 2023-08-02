import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import { useSetAtom } from 'jotai';
import { writableLoadableAtom } from '../atoms/main.atom';

const SView = styled(
  View, //
  'flex-1 items-center justify-center',
);

const SButton = styled(
  TouchableOpacity, //
  'bg-blue-500 w-2/3 h-12 items-center justify-center rounded-md',
);

const SText = styled(
  Text, //
  'text-white',
);

const Main = () => {
  const setLoginAtom = useSetAtom(writableLoadableAtom);

  const onPress = () => {
    setLoginAtom({
      token: '',
      email: '',
    });
  };

  return (
    <SView>
      <SButton onPress={onPress}>
        <SText>Button</SText>
      </SButton>
      <Text>Main</Text>
    </SView>
  );
};

export default Main;
