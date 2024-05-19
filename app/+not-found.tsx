import { AntDesign } from '@expo/vector-icons';
import { Link, Stack, router } from 'expo-router';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function NotFoundScreen() {
  return (
    <SafeAreaView className="w-full flex-1 bg-white">
      <Stack.Screen
        options={{
          title: 'Not Found',
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={{ marginLeft: 15, marginRight: 15 }}>
              <AntDesign name="arrowleft" size={24} color="#F7941C" />
            </Pressable>
          ),
        }}
      />
      <View className="w-full flex items-center justify-center flex-col pt-12 pb-16">
        <View className="relative flex flex-col">
          <View className=" w-7/12 mx-auto z-[1] px-6">
            <Text className='font-bold text-primary text-[100px]'>404</Text>
          </View>
        </View>
        <View className="flex flex-col items-center space-y-3 pb-8">
          <Text className="text-[#2A2C30] font-medium text-2xl">Sorry Page Not Found :(</Text>
          <Text className=" text-center max-w-md text-base">We are sorry. The Page you are looking for does not exist. It might have been moved or delete.</Text>
        </View>
        <TouchableOpacity className=" bg-primary rounded py-3 px-8 text-lg" onPress={() => router.push("/login")}>
          <Text className='text-white'>Back To Home Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
