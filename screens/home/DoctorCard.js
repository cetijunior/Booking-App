import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const DoctorCard = ({ navigation }) => {

    const doctor = {
        name: 'Dr. Mike Oxmall',
        title: 'Senior Surgeon',
        specialty: 'Cardiologist and Surgeon',
        imgsrc: require('../../assets/surgeon.png'),
        workHours: '10:30 AM - 3:30 PM',
        fee: '12$',
        location: 'Mirpur Medical College and Hospital',
        reviews: '(96 reviews)',
        patients: '10',
        years: '3+',
        rating: '4.9',
        review: '90+',
        about: 'Dr. Ali Uzair is the top most cardiologist specialist in Crist Hospital in London, UK. He achived several awards for her wonderful contribution',

    }


    return (
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
                        source={require('../../assets/ui/star.png')}
                    />
                    <Text className='text-lg'>{doctor.rating}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('../Profile')}>
                    <Image
                        className='w-10 h-10 object-cover rounded-md'
                        source={require('../../assets/ui/arrowR.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default DoctorCard