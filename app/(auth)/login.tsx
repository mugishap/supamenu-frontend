import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <SafeAreaView className='flex-1 w-full flex flex-col bg-primary justify-end items-end'>
      <Stack.Screen options={{ headerShown: false }} />
      <View className='bg-white w-full p-4 rounded-t-2xl flex flex-col items-center pb-1'>
        <Text className='text-4xl my-3 font-bold'>Supa<Text className='text-primary'>Menu</Text></Text>
        <Text className='mt-4 font-semibold text-lg'>Welcome</Text>
        <Text className='text-slate-700 my-3'>Sign In to continue</Text>

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
          {errors.email && <Text className='text-red-600'>{errors?.email?.message as string}</Text>}
        </View>

        <View className='w-full flex flex-col my-2'>
          <Controller
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: 'Password must contain at least one letter and one number',
              }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className='bg-slate-100 flex w-full h-14 rounded-lg flex-row items-center pl-3'>
                <MaterialCommunityIcons name='lock' size={24} color='#9EA5BA' />
                <TextInput
                  className='w-11/12 px-3 py-2 h-full'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder='*****'
                  secureTextEntry={true}
                />
              </View>
            )}
            name="password"
          />
          {errors.password && <Text className='text-red-600'>{errors?.password?.message as string}</Text>}
        </View>

        <TouchableOpacity className='my-2 w-full py-2 rounded-lg bg-primary text-white' onPress={handleSubmit(onSubmit)}>
          <Text className='text-white font-semibold text-center text-xl'>Sign In</Text>
        </TouchableOpacity>
        <Text className='text-center text-slate-700 my-2 mb-4'>OR</Text>
        <TouchableOpacity onPress={() => router.push("/home")} className='my-2 w-full border p-4 border-slate-200 rounded-xl flex flex-row items-center relative'>
          <Image source={require('./../../assets/images/google.png')} className='w-8 h-8 mx-2 absolute' />
          <Text className='text-slate-500 font-semibold text-center mx-auto'>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className='my-2 w-full border p-4 border-slate-200 rounded-xl flex flex-row items-center relative'>
          <Image source={require('./../../assets/images/facebook.png')} className='w-8 h-8 mx-2 absolute' />
          <Text className='text-slate-500 font-semibold text-center mx-auto'>Login with Facebook</Text>
        </TouchableOpacity>
        <Text onPress={() => router.push("/forgot-password")} className='my-2 text-primary font-semibold'>Forgot Password?</Text>
        <Text className='flex items-center my-2'>
          Don't have an account? <Text className='text-primary font-semibold' onPress={() => router.push("/signup")}>Register</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
