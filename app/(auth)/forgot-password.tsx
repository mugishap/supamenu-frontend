import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPassword() {

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <SafeAreaView className='flex-1 bg-primary w-full relative'>
      <Stack.Screen options={{ headerShown: false }} />
      <Pressable className='absolute left-4 top-10 p-2 rounded-full w-12 h-12 flex items-center justify-center bg-white' onPress={() => router.back()}>
        <AntDesign name='arrowleft' size={24} color='#F7941C' />
      </Pressable>
      <View className='flex flex-col w-full h-full justify-end items-end'>
        <View className='bg-white w-full p-4 rounded-t-2xl flex flex-col items-center pb-20'>
          <Text className='text-4xl my-3 font-bold'>Supa<Text className='text-primary'>Menu</Text></Text>
          <Text className='text-slate-700 my-3'>Enter your email for recovery code</Text>
          <View className='w-full flex flex-col my-2'>
            <Controller
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className='bg-slate-100 flex w-full h-14 rounded-lg flex-row items-center pl-3'>
                  <MaterialCommunityIcons name='email' size={24} color='#9EA5BA' />
                  <TextInput
                    className='w-11/12 px-3 py-2 h-full'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder='Your Email'
                  />
                </View>
              )}
              name="email"
            />
            {errors.email && <Text className='text-red'>{errors?.email?.message as string}</Text>}
          </View>
          <TouchableOpacity className='my-2 w-full py-2 rounded-lg bg-primary text-white' onPress={handleSubmit(onSubmit)}>
            <Text className='text-white font-semibold text-center text-xl'>Send Recovery Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
