import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DishScreen = () => {

    const [data, setData] = useState({
        id: 0,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Cooked Dish",
        price: 10.99,
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam nec elit nec ipsum ultricies tincidunt.
        Nullam nec elit nec ipsum ultricies tincidunt.
        Nullam nec elit nec ipsum ultricies tincidunt.
        Nullam nec elit nec ipsum ultricies tincidunt.
        Nullam nec elit nec ipsum ultricies tincidunt.
        `
    })

    return (
        <SafeAreaView className='flex-1 bg-white w-full flex flex-col'>
            <Stack.Screen options={{ title: data.title }} />
            <ScrollView>
                <View className='flex flex-col items-center'>
                    <Text className='text-2xl font-semibold text-center'>{data.title}</Text>
                    <Text className='text-lg font-semibold text-center'>${data.price}</Text>
                    <Image source={{ uri: data.image }} className='rounded-2xl my-3'
                        resizeMode='cover'
                        width={Dimensions.get('window').width - 40}
                        height={200}
                    />
                    <Text className='text-lg font-semibold text-center'>Description</Text>
                    <Text className='text-base font-normal text-center'>{data.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DishScreen