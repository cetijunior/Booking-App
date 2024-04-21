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

    const bio = route.params?.bio || 'Add a bio ...'



    const user =
    {
        name: 'Ceti',
        bio: bio,
        imgSrc: require('../assets/logo.png'),
        favorites: [1, 2, 3, 4, 5, 6, 7, 8],
    }


    const handleBackPress = (
    ) => {
        navigation.navigate('Home',
            { userImg: user.imgSrc, imgSrc: imgSrc, name: name, specialty: specialty, location: location, reviews: reviews, patients: patients, years: years, rating: rating, review: review, about: about })
    }


    const styles = StyleSheet.create({
        shadow: {
            shadowColor: "#1c6894",
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
        <View className='flex flex-col items-center px-8'>

            <View className='flex flex-col items-center px-8 w-full'>


                <View className='absolute bottom-[360px] z-50'>
                    <Navbar />
                </View>


                {/* Header */}
                <View className='mt-10'>
                    <TouchableOpacity className='absolute top-2 left-4 z-50' onPress={handleBackPress}>
                        <Image
                            className='w-8 h-8 object-cover rounded-md'
                            source={require('../assets/ui/lArrow.png')}
                        />
                    </TouchableOpacity>
                    <Image source={user.imgSrc} className='w-screen h-96 object-contain' />
                </View>

                {/* Description */}

                <View style={styles.shadow} className='flex flex-col items-center bg-blue-600 rounded-3xl w-full space-y-2 px-3 py-2 -mt-28 z-10 shadow-2xl'>
                    <Text className='text-4xl font-semibold text-white'>{user.name}</Text>
                    <Text className='text-lg font-semibold text-white'>{user.bio}</Text>
                </View>


                {/* Date */}

                <View className='flex flex-col justify-start items-start space-y-4 w-screen px-6 -mt-10 h-screen bg-white rounded-[40px]'>

                    <View className='flex flex-col justify-center w-full'>
                        <View className='flex flex-row items-center w-full py-2 mt-16'>
                            <Text className='font-semibold text-xl'>Your Appointments: </Text>
                        </View>

                        <View className='flex flex-row w-full items-center justify-start bg-white h-28 rounded-3xl shadow-2xl'>
                            <View className=' flex flex-row items-center justify-evenly w-full'>
                                <View className='flex flex-col items-start bg-[#5fddd74d] mx-2 p-3 space-y-2 rounded-2xl'>
                                    <Text className='font-semibold'>Dr Agrita</Text>
                                    <Text className='italic'>Teeth Check</Text>
                                    <View className='flex flex-row space-x-2'>
                                        <Text className='font-semibold'>Mon</Text>
                                        <Text className='font-semibold'>3</Text>
                                    </View>
                                </View>
                                <View className='flex flex-col items-start bg-[#5fddd74d] mx-2 p-3 space-y-2 rounded-2xl'>
                                    <Text>Dr Agrita</Text>
                                    <Text>Teeth Check</Text>
                                    <View className='flex flex-row space-x-2'>
                                        <Text className='font-semibold'>Mon</Text>
                                        <Text className='font-semibold'>3</Text>
                                    </View>
                                </View>
                                <View className='flex flex-col items-start bg-[#5fddd74d] mx-2 p-3 space-y-2 rounded-2xl'>
                                    <Text>Dr Agrita</Text>
                                    <Text>Teeth Check</Text>
                                    <View className='flex flex-row space-x-2'>
                                        <Text className='font-semibold'>Mon</Text>
                                        <Text className='font-semibold'>3</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>

                </View>
            </View>
        </View>
    )
}

export default Book