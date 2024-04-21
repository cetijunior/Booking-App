import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-white"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
            <View className="flex-1 items-center justify-evenly px-6 py-4 w-full">

                <View>
                    <Image
                        source={require('../assets/logo.png')}
                        className="w-80 h-80 mt-20 rounded-full animate-ping"
                    />
                </View>

                <View className='w-full'>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        className="text-lg p-4 bg-gray-100 w-full rounded-lg mb-4"
                    />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry={!passwordVisible}
                        className="text-lg p-4 bg-gray-100 w-full rounded-lg mb-4"
                    />
                    <TouchableOpacity className="mb-4">
                        <Text className="text-md text-right py-2 text-[#3E69FE]">
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        className="bg-[#3E69FE] w-full py-4 rounded-full shadow-md mb-4"
                    >
                        <Text className="text-center text-white text-xl font-semibold">
                            Log In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text className="text-md text-center text-[#3E69FE] mb-2">
                            Don't have an account? Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginPage;
