// import { useGlobalContext } from '@/context';
// import { Stack } from 'expo-router';
// import React, { useState } from 'react';
// import { FlatList, RefreshControl, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function Cart() {

//   const [refreshing, setRefreshing] = useState(false)
//   const { cart } = useGlobalContext()

//   const loadData = async () => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 3000);
//   }

//   return (
//     <SafeAreaView className='flex-1 flex-col bg-white'>
//       <Stack.Screen options={{ headerShown: false }} />
//       <Text>Cart</Text>
//       <FlatList
//         data={cart}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={loadData} />
//         }
//         renderItem={({ item }) => (
//           <View className='flex flex-col bg-white rounded-xl p-2 shadow-md my-2'>

//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />

//     </SafeAreaView>
//   );
// }
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native'

const cart = () => {
  return (
    <SafeAreaView>
      <Text>Cart</Text>
    </SafeAreaView>
  )
}

export default cart
