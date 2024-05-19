import { useGlobalContext } from '@/context';
import { items } from '@/utils/data';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, Pressable, RefreshControl, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function home() {

  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = React.useState(items);

  const { cart, setCart, liked, setLiked } = useGlobalContext()

  const loadData = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData(items)
    }, 3000);
  }

  useEffect(() => {
    if (search === '') return setData(items)
    setData(items.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  return (
    <SafeAreaView className='flex-1 flex-col px-2 bg-white pt-0 pb-44'>
      <Text className='font-semibold text-lg mb-4'>Welcome!</Text>
      <View className='bg-white w-full'>
        <TextInput
          className='mb-4  rounded-2xl px-3 py-2 bg-slate-200'
          placeholder="Search here..."
          onChangeText={(newText: string) => setSearch(newText)}
          defaultValue={search}
        />
      </View>
      <View className='flex flex-col'>
        <FlatList
          data={data}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadData} />
          }
          renderItem={({ item }) => (
            <View className='flex flex-col bg-white rounded-xl p-2 shadow-md my-2'>
              <TouchableOpacity onPress={() => router.push(`/dish/${item.id}`)}>
                <Image
                  source={{ uri: item.image }}
                  width={Dimensions.get('window').width - 30}
                  height={200}
                  resizeMode='cover'
                  className='rounded-xl mb-2'
                />
              </TouchableOpacity>
              <View className='w-full flex flex-row items-start justify-between'>
                <Pressable className='max-w-8/12 flex flex-col' onPress={() => router.push(`/dish/${item.id}`)}>
                  <Text className='font-semibold text-lg'>{item.title}</Text>
                  <Text className='text-sm text-gray-500'>${item.price}</Text>
                </Pressable>
                <View className='gap-x-2 flex flex-row'>
                  <AntDesign name={
                    liked.find((likedItem: any) => likedItem.id === item.id) ? 'heart' : 'hearto'
                  } size={22} color="#F7941C" onPress={() => {
                    setLiked([...liked, item])
                  }} />
                  <MaterialIcons name={
                    cart.find((cartItem: any) => cartItem.id === item.id) ? 'remove-shopping-cart' : 'add-shopping-cart'
                  } size={22} color="#F7941C" onPress={() => {
                    setCart([...cart, item])
                  }} />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
