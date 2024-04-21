import { View, TouchableOpacity, Text, Image } from 'react-native';
import React, { Component } from 'react'

const Entry = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white px-4 py-6">
      <Image
        source={require('../assets/logo.png')}
        className="mb-10 w-80 h-80 rounded-full"
      />
      <View className="flex flex-col items-center justify-center ">
        <Text className="text-4xl font-bold text-center ">Welcome to the</Text>
        <Text className="text-4xl font-bold text-center mb-6">Booking App</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        className="bg-[#3E69FE] w-full py-4 rounded-full shadow-md mb-4"
      >
        <Text className="text-center text-white text-xl font-semibold">
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        className="border border-[#3E69FE] w-full py-4 rounded-full shadow-md"
      >
        <Text className="text-center text-[#3E69FE] text-xl font-semibold">
          Log In
        </Text>
      </TouchableOpacity>
      <Text className="text-xs text-center text-gray-500 mt-10">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </View>
  );
};


export default Entry