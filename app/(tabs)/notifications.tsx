import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notifications() {

  const data = [
    {
      id: 0,
      title: 'New Order',
      description: 'You have received a new order from customer John Doe',
    },
    {
      id: 1,
      title: 'New Order',
      description: 'You have received a new order from customer John Doe',
    },
    {
      id: 2,
      title: 'New Order',
      description: 'You have received a new order from customer John Doe',
    },
    {
      id: 3,
      title: 'New Order',
      description: 'You have received a new order from customer John Doe',
    },
    {
      id: 4,
      title: 'New Order',
      description: 'You have received a new order from customer John Doe',
    },
  ]

  return (
    <SafeAreaView className='flex-1 flex-col bg-white'>
      <Text className='font-semibold text-lg mb-4 ml-2'>Notifications</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View className='flex-row items-center justify-between p-4 rounded-xl m-2 bg-gray-200'>
            <View className='flex-col'>
              <Text className='font-semibold'>{item.title}</Text>
              <Text className='text-sm text-gray-400'>{item.description}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}
