import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Navbar from './home/Navbar'

const Profile = ({ navigation, route }) => {

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

    const handleBookPress = (
    ) => {
        navigation.navigate('Book', { imgSrc: imgSrc, name: name, specialty: specialty, location: location, reviews: reviews, patients: patients, years: years, rating: rating, review: review, about: about })
    }


    return (
        <View className='flex flex-col items-center h-screen px-6'>


            {/* Header */}

            <View className='flex flex-row items-center justify-between w-full mt-20'>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        className='w-8 h-8 object-cover rounded-md'
                        source={require('../assets/ui/lArrow.png')}
                    />
                </TouchableOpacity>
                <Text className='text-2xl font-semibold mr-8'>Doctor</Text>
                <Text className='text-2xl'></Text>

            </View>


            {/* Doctor */}

            <View className='flex flex-col justify-center object-cover items-start text-xl mt-5'>
                <View className='relative'>
                    <Image
                        className='w-96 h-64 rounded-t-[30px]'
                        source={imgSrc}
                    />
                    <TouchableOpacity className='absolute left-80 top-5 bg-white rounded-full p-1 px-2'>
                        <Image source={require('../assets/ui/favorite.png')} alt='patients' className='w-8 h-10' />
                    </TouchableOpacity>
                </View>

                <View className='flex flex-row items-center justify-between w-full'>
                    <View>
                        <Text className='text-2xl mt-4 font-semibold'>{name}</Text>
                        <Text className='text-lg opacity-60'>{specialty}</Text>
                    </View>
                    <View className='flex flex-row items-center space-x-2 -mr-4 -mt-4'>
                        <Image
                            className='w-4 h-4 object-cover rounded-md'
                            source={require('../assets/ui/star.png')}
                        />
                        <Text className='text-lg'>{reviews}</Text>
                    </View>
                </View>
            </View>


            {/* Description */}

            <View className='flex flex-row items-center justify-between w-full px-2 mt-8'>
                <View className='flex flex-col items-center'>
                    <Image source={require('../assets/profile/profile.png')} alt='patients' className='w-14 h-14' />
                    <Text className='text-lg mt-2 font-bold'>{patients}</Text>
                    <Text className='opacity-60'>Patients</Text>
                </View>
                <View className='flex flex-col items-center'>
                    <Image source={require('../assets/profile/checkbox.png')} alt='patients' className='w-14 h-14' />
                    <Text className='text-lg mt-2 font-bold'>{years}</Text>
                    <Text className='opacity-60'>Years</Text>
                </View>
                <View className='flex flex-col items-center'>
                    <Image source={require('../assets/profile/starR.png')} alt='patients' className='w-14 h-14' />
                    <Text className='text-lg mt-2 font-bold'>{rating}</Text>
                    <Text className='opacity-60'>Rating</Text>
                </View>
                <View className='flex flex-col items-center'>
                    <Image source={require('../assets/profile/reviews.png')} alt='patients' className='w-14 h-14' />
                    <Text className='text-lg mt-2 font-bold'>{review}</Text>
                    <Text className='opacity-60'>Reviews</Text>
                </View>
            </View>


            {/* Navbar */}

            <View className='absolute bottom-0'>
                <Navbar />
            </View>


            {/* Description */}
            <View className='flex flex-col space-y-3 pt-5'>
                <Text className='text-2xl font-bold'>About Me</Text>
                <View className='space-y-6'>
                    <Text className='opacity-70'>{about}</Text>

                    <TouchableOpacity onPress={handleBookPress} className='px-14 bg-blue-600 rounded-3xl py-4'>
                        <Text className='text-center text-white font-bold text-lg'>Book Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View >
    )
}

export default Profile