import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';

const SignupPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
            className="bg-white"
        >
            <View className="flex-1 items-center justify-evenly pb-6 px-4 pt-6">

                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} className="mt-16">
                    <Image
                        source={require('../assets/logo.png')}
                        className="w-80 h-80 rounded-full"
                    />
                </TouchableOpacity>

                <View className='w-full items-center'>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        className="text-lg p-4 bg-gray-100 w-full rounded-md mb-4"
                    />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry={!passwordVisible}
                        className="text-lg p-4 bg-gray-100 w-full rounded-md mb-4"
                    />
                    <TextInput
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm Password"
                        secureTextEntry={!passwordVisible}
                        className="text-lg p-4 bg-gray-100 w-full rounded-md mb-4"
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        className="bg-[#3E69FE] w-full py-4 rounded-full shadow-md mb-4"
                    >
                        <Text className="text-center text-white text-xl font-semibold">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className="text-md text-center text-[#3E69FE]">
                            Already have an account? Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default SignupPage;
