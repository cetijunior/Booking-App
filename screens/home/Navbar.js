import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {

    const navigation = useNavigation();

    const handleProfilePress = () => {
        navigation.navigate('User');
    };


    return (
        <View className='relative bottom-0 bg-[#e9e7e7] rounded-full w-screen py-5 -mx-4'>

            <View className='flex flex-row items-start justify-between px-10 pb-2'>

                <TouchableOpacity>
                    <Image source={require('../../assets/navbar/home.png')} className='w-7 h-6' />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../../assets/navbar/calendar.png')} className='w-7 h-6' />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../../assets/navbar/favorites.png')} className='w-6 h-6' />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleProfilePress}>
                    <Image source={require('../../assets/navbar/profile.png')} className='w-6 h-6' />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Navbar