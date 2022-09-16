import React, { FC } from 'react';
import { Button, Input } from '@rneui/themed';
import { Controller, useForm } from 'react-hook-form';

import { Screen } from '@/components/Screen';
import { Container } from '@/components/Container';
import { registerUser } from '@/services/authService';

export const Register: FC = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: any) => {
    await registerUser(data.email, data.password);
    console.log('Registered');
  };

  return (
    <Screen>
      <Container flex={1} flexDirection="column" justifyContent="center" alignItems="center">
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input placeholder="email" onChangeText={(val) => onChange(val)} value={value} />
          )}
          name="email"
        />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="password"
              textContentType="password"
              secureTextEntry
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="password"
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </Container>
    </Screen>
  );
};
