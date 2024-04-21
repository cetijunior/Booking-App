import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native"
import Navbar from './home/Navbar'

const Book = ({ navigation, route }) => {

    const name = route.params?.name || ""
    const specialty = route.params?.specialty || ""
    const imgSrc = route.params?.imgSrc || ""
    const location = route.params?.location || ""
    const reviews = route.params?.reviews || ""
    const patients = route.params?.patients || ""
    const years = route.params?.years || ""
    const rating = route.params?.rating || ""
    const review = route.params?.review || ""
    const about = route.params?.about || ""


    const handleBackPress = (
    ) => {
        navigation.navigate('Profile', { imgSrc: imgSrc, name: name, specialty: specialty, location: location, reviews: reviews, patients: patients, years: years, rating: rating, review: review, about: about })
    }


    const styles = StyleSheet.create({
        shadow: {
            shadowColor: "#0d8791",
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.8,
            shadowRadius: 10,

            elevation: 12,
        }
    })

    return (
        <View className='flex flex-col items-center h-screen px-8'>


            {/* Header */}
            <View className='mt-10'>
                <TouchableOpacity className='absolute top-2 left-4 z-50' onPress={handleBackPress}>
                    <Image
                        className='w-8 h-8 object-cover rounded-md'
                        source={require('../assets/ui/lArrow.png')}
                    />
                </TouchableOpacity>
                <Image source={imgSrc} className='w-screen h-96 object-contain' />
            </View>

            {/* Description */}

            <View style={styles.shadow} className='flex flex-col items-center bg-blue-600 rounded-3xl w-full space-y-2 px-3 py-6 -mt-28 z-10 shadow-2xl'>
                <Text className='text-4xl font-semibold text-white'>{name}</Text>
                <Text className='text-lg font-semibold text-white'>{specialty}</Text>
                <Text className='text-lg font-semibold text-white'>{location}</Text>
            </View>


            {/* Date */}

            <View className='flex flex-col justify-start items-start space-y-4 w-screen px-6 -mt-24 h-screen bg-white rounded-[40px]'>

                <View className='flex flex-col justify-center w-full'>
                    <View className='flex flex-row items-center w-full py-2 mt-24'>
                        <Text className='font-semibold text-xl'>Appointments</Text>
                    </View>

                    <View className='flex flex-row w-full py-6 px-6 justify-evenly space-x-8 bg-white h-28 rounded-3xl shadow-2xl'>
                        <TouchableOpacity className='flex flex-col items-center h-16 w-14 p-1 rounded-2xl space-y-4'>
                            <Text className='font-semibold'>Mon</Text>
                            <Text className='font-semibold'>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-col items-center h-16 w-14 p-1 rounded-2xl space-y-4'>
                            <Text className='font-semibold'>Mon</Text>
                            <Text className='font-semibold'>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-col  items-center bg-[#73D0ED] h-16 w-14 p-1 rounded-2xl space-y-4'>
                            <Text className='font-bold text-white'>Mon</Text>
                            <Text className='font-bold text-white'>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-col items-center h-16 w-14 p-1 rounded-2xl space-y-4'>
                            <Text className='font-semibold'>Mon</Text>
                            <Text className='font-semibold'>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-col items-center h-16 w-14 p-1 rounded-2xl space-y-4'>
                            <Text className='font-semibold'>Mon</Text>
                            <Text className='font-semibold'>3</Text>
                        </TouchableOpacity>
                    </View>

                    <View className='pb-8 space-y-2'>
                        <View className='flex flex-row items-center justify-between w-full py-2 mt-2'>
                            <Text className='font-semibold text-xl text-black z-20'>Avaliable Time</Text>
                        </View>

                        <View className='flex flex-row justify-center items-center space-x-4 w-full'>
                            <TouchableOpacity className='border border-gray-400 bg-[#EDAE73] rounded-xl p-2'>
                                <Text className='font-bold text-white'>
                                    9:00 AM
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='border border-gray-400 rounded-xl p-2'>
                                <Text>
                                    9:00 AM
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='border border-gray-400 rounded-xl p-2'>
                                <Text>
                                    9:00 AM
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='border border-gray-400 rounded-xl p-2'>
                                <Text>
                                    9:00 AM
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View >
                        <TouchableOpacity className='mx-8 -mt-2 bg-blue-600 z-10 rounded-3xl py-4'>
                            <Text className='text-center text-white font-bold text-lg'>Confirm</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View className='-mx-2'>
                    <Navbar />
                </View>
            </View>
        </View>
    )
}

export default Book