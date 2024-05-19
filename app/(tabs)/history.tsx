import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function History() {

    return (
        <SafeAreaView className='flex-1 flex-col bg-white'>
            <Text className='font-semibold text-lg mb-4 ml-2'>History</Text>
            <View className='flex-row items-center justify-between p-4 rounded-xl m-2 bg-gray-200'>
                <View className='flex-col'>
                    <Text className='font-semibold'>New Order</Text>
                    <Text className='text-sm text-gray-400'>You have received a new order from customer John Doe</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
