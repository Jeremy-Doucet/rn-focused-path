import React, { FC } from 'react';
import { Button } from '@rneui/themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Screen } from '@/components/Screen';
import { Container } from '@/components/Container';
import { RootStackParamList } from '@/navigation/MainNav';

/**
 * A Home screen
 */
export const HomeScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToLogin = () => {
    navigation.navigate('Login', {});
  };

  const goToRegister = () => {
    navigation.navigate('Register', {});
  };

  return (
    <Screen testID="HomeScreen" alignItems="center" justifyContent="center">
      <Container flexDirection="row" justifyContent="space-around">
        <Button title="Login" onPress={goToLogin} />
        <Button title="Sign Up" onPress={goToRegister} />
      </Container>
    </Screen>
  );
};
