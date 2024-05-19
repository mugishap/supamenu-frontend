import { useGlobalContext } from '@/context';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, router } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';

export default function TabLayout() {

  const { isLogged, cart } = useGlobalContext()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#F7941C',
        tabBarStyle: {
          height: 60,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          padding: 5
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome className=' bg-blue-400' name="home" size={25} color={color} />,
          headerRight: () => (
            <Pressable onPress={() => router.push("/login")}>
              {({ pressed }) => (
                <AntDesign
                  name="user"
                  size={25}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => {
              }}
            >
              {({ pressed }) => (
                <Text className='font-bold text-xl' style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}>
                  Supa<Text className='text-primary'>Menu</Text>
                </Text>
              )}
            </Pressable>
          )
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome5 className='-mb-3 bg-blue-400' name="bell" size={25} color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              {({ pressed }) => (
                <AntDesign
                  name="left"
                  size={25}
                  style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          )
        }}
      />
      <Tabs.Screen
        name="scan-code"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign className='-mb-3 bg-blue-400' name="scan1" size={28} color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              {({ pressed }) => (
                <AntDesign
                  name="left"
                  size={25}
                  style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          )
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialIcons className='-mb-3 bg-blue-400' name="history" size={25} color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              {({ pressed }) => (
                <AntDesign
                  name="left"
                  size={25}
                  className='bg-primary'
                  style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: '',
          tabBarIcon: ({ color, }) =>
            <Pressable className='relative'>
              <Text className='absolute -top-2 -right-2 text-xs bg-primary text-white rounded-full px-1'>{cart.length}</Text>
              <AntDesign className='-mb-3 bg-blue-400' name="shoppingcart" size={25} color={color} />
            </Pressable>,
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              {({ pressed }) => (
                <AntDesign
                  name="left"
                  size={25}
                  style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          )
        }}
      />
    </Tabs>
  );
}
