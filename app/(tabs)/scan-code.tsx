import { CameraView, useCameraPermissions } from 'expo-camera';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScanCode() {

  const [facing, setFacing] = useState(CameraType.back);
  const [permission, requestPermission] = useCameraPermissions();

  function toggleCameraFacing() {
    setFacing(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <SafeAreaView className='w-full flex-1'>
      <CameraView className="flex-1" facing={facing}>
        <View className='flex flex-row bg-transparent'>
          <TouchableOpacity className="flex flex-row items-center self-end" onPress={toggleCameraFacing}>
            <Text className='text-lg font-bold text-white'>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </SafeAreaView>
  );
}
