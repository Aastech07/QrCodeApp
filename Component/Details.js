import React, { useEffect } from 'react'
import { View, Text, BackHandler, Alert } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import QRCode from 'react-native-qrcode-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Details = () => {
    const route = useRoute();
    const data = route.params.data
    const navigation = useNavigation();

    React.useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

    const setData = async () => {
        try {
             await AsyncStorage.setItem('key', data);

            console.log('data save',)

        } catch (error) {
            console.log(error)
        }
    }
useEffect(()=>{
 setData()
},[])
    return (
        <View style={{ alignContent: 'center', alignItems: 'center', }}>
            <View style={{ top: 150 }}>
                <QRCode value={data} size={300} color={'#000'} backgroundColor="white" />
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text style={{ top: 200, color: 'red', fontSize: 20, }}>{data}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Barcode')} >
                <FontAwesome5 size={35} name='arrow-left' style={{ bottom: 250, position: 'absolute', right: 120 }} />
            </TouchableOpacity>


        </View>
    )
}

export default Details;

