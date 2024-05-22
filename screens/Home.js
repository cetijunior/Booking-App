import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Navbar from './home/Navbar'
import DoctorCard from './home/DoctorCard'

const Home = ({ navigation, route }) => {

    const [search, setSearch] = useState('')

    const userImg = route.params?.userImg || require('../assets/profile/profile.png')


    const doctor = {
        name: 'Dr. Nat Roman',
        title: 'Senior Surgeon',
        specialty: 'Cardiologist and Surgeon',
        imgsrc: require('../assets/surgeon.png'),
        workHours: '10:30 AM - 3:30 PM',
        fee: '12$',
        location: 'Mirier Medical College and Hospital',
        reviews: '(96 reviews)',
        patients: '10',
        years: '3+',
        rating: '4.9',
        review: '90+',
        about: 'Dr. Nat Roman is the top most cardiologist specialist in Christ Hospital in London, UK. She achieved several awards for her wonderful contribution',

    }

    const handleDoctorPress = (
    ) => {
        navigation.navigate('Profile', { imgSrc: doctor.imgsrc, name: doctor.name, specialty: doctor.specialty, location: doctor.location, reviews: doctor.reviews, patients: doctor.patients, years: doctor.years, rating: doctor.rating, review: doctor.review, about: doctor.about })
    }

    const handleProfilePress = (
    ) => {
        navigation.navigate('Profile', { imgSrc: doctor.imgsrc, name: doctor.name, specialty: doctor.specialty, location: doctor.location, reviews: doctor.reviews, patients: doctor.patients, years: doctor.years, rating: doctor.rating, review: doctor.review, about: doctor.about })
    }


    return (
        <View className='flex-1'>


            <View className='flex-1 flex-col justify-start mt-20 space-y-16 items-start px-4'>


                {/* Header */}

                <View className='flex flex-col items-start space-y-4 -mb-4 px-2'>
                    <View className='flex flex-row items-center w-full justify-between'>
                        <TouchableOpacity onPress={() => navigation.navigate('User')}
                            className=''>
                            <Image
                                className='w-16 h-16 rounded-full'
                                source={userImg}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                className='w-10 h-10 object-cover rounded-md'
                                source={require('../assets/ui/notifications.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View className='flex flex-col space-y-2'>
                        <Text className='text-2xl'>Hello, User</Text>
                        <View className='flex flex-row items-center justify-between w-full'>

                            <View className='flex flex-row justify-end items-center shadow-md p-2 rounded-xl bg-white space-x-2'>
                                <Image
                                    className='w-8 h-8 object-cover rounded-md'
                                    source={require('../assets/ui/search.png')}
                                />
                                <TextInput
                                    placeholder="Search"
                                    value={search}
                                    onChangeText={setSearch}
                                    className='px-2 w-60'
                                />
                            </View>
                            <TouchableOpacity>
                                <Image
                                    className='w-12 h-12 object-cover rounded-md rotate-180'
                                    source={require('../assets/ui/filter.png')}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>


                {/* Services */}

                <View className='flex flex-col items-center justify-center w-full space-y-2 -mb-20'>
                    <View className='flex flex-row items-center justify-between w-full space-x-4 pb-6'>
                        <Text className='text-3xl font-semibold'>Services</Text>
                        <TouchableOpacity className='bg-[#3E69FE] flex flex-row space-x-2 rounded-xl items-center px-2'>
                            <Text className='text-lg text-white'> See All</Text>
                            <Image
                                className='w-4 h-4 object-cover rounded-md rotate-180'
                                source={require('../assets/ui/lArrow.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View className='flex flex-row items-center justify-evenly pb-8 w-screen'>
                        <TouchableOpacity>
                            <Image
                                className='w-32 h-24 rounded-md'
                                source={require('../assets/services/service1.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                className='w-32 h-24 rounded-md'
                                source={require('../assets/services/service2.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                className='w-32 h-24 rounded-md'
                                source={require('../assets/services/service3.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>


                {/* Top Doctors */}

                <View className='flex flex-col items-start justify-center w-full space-y-6'>
                    <Text className='text-3xl -mb-14 font-semibold'>Top Doctors</Text>
                </View>

                <ScrollView className='flex -mt-20 space-y-4 h-full '>
                    <View className='flex flex-col mb-20 space-y-4'>


                        <View className='flex flex-row justify-between w-full bg-white p-6 mb-4 rounded-xl shadow-md '>
                            <Image
                                className='w-28 h-28 object-contain rounded-lg'
                                source={doctor.imgsrc}
                            />

                            <View className='flex flex-col space-y-1'>
                                <Text className='text-xl font-semibold'>{doctor.name}</Text>
                                <Text className='text-lg italic font-semibold opacity-60'>{doctor.title}</Text>
                                <Text className='text-md font-semibold '>{doctor.workHours}</Text>
                                <Text className='text-md font-semibold opacity-60'>Fee: {doctor.fee}</Text>
                            </View>
                            <View className='flex flex-col justify-between items-center'>
                                <View className='flex flex-row items-center space-x-2'>
                                    <Image
                                        className='w-4 h-4 object-cover -mt-0 rounded-md'
                                        source={require('../assets/ui/star.png')}
                                    />
                                    <Text className='text-lg'>{doctor.rating}</Text>
                                </View>
                                <TouchableOpacity onPress={handleDoctorPress}>
                                    <Image
                                        className='w-10 h-10 object-cover rounded-md'
                                        source={require('../assets/ui/arrowR.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>



                        <View className='flex flex-row justify-between w-full bg-white p-6 mb-4 rounded-xl shadow-md '>
                            <Image
                                className='w-28 h-28 object-contain rounded-lg'
                                source={doctor.imgsrc}
                            />

                            <View className='flex flex-col space-y-1'>
                                <Text className='text-xl font-semibold'>{doctor.name}</Text>
                                <Text className='text-lg italic font-semibold opacity-60'>{doctor.title}</Text>
                                <Text className='text-md font-semibold '>{doctor.workHours}</Text>
                                <Text className='text-md font-semibold opacity-60'>Fee: {doctor.fee}</Text>
                            </View>
                            <View className='flex flex-col justify-between items-center'>
                                <View className='flex flex-row items-center space-x-2'>
                                    <Image
                                        className='w-4 h-4 object-cover -mt-0 rounded-md'
                                        source={require('../assets/ui/star.png')}
                                    />
                                    <Text className='text-lg'>{doctor.rating}</Text>
                                </View>
                                <TouchableOpacity onPress={handleDoctorPress}>
                                    <Image
                                        className='w-10 h-10 object-cover rounded-md'
                                        source={require('../assets/ui/arrowR.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>



                        <View className='flex flex-row justify-between w-full bg-white p-6 mb-4 rounded-xl shadow-md '>
                            <Image
                                className='w-28 h-28 object-contain rounded-lg'
                                source={doctor.imgsrc}
                            />

                            <View className='flex flex-col space-y-1'>
                                <Text className='text-xl font-semibold'>{doctor.name}</Text>
                                <Text className='text-lg italic font-semibold opacity-60'>{doctor.title}</Text>
                                <Text className='text-md font-semibold '>{doctor.workHours}</Text>
                                <Text className='text-md font-semibold opacity-60'>Fee: {doctor.fee}</Text>
                            </View>
                            <View className='flex flex-col justify-between items-center'>
                                <View className='flex flex-row items-center space-x-2'>
                                    <Image
                                        className='w-4 h-4 object-cover -mt-0 rounded-md'
                                        source={require('../assets/ui/star.png')}
                                    />
                                    <Text className='text-lg'>{doctor.rating}</Text>
                                </View>
                                <TouchableOpacity onPress={handleDoctorPress}>
                                    <Image
                                        className='w-10 h-10 object-cover rounded-md'
                                        source={require('../assets/ui/arrowR.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>
                </ScrollView>


                <Navbar />

            </View>


        </View >
    )
}

export default Home