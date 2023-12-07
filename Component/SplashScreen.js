import React from 'react'
import { View ,StyleSheet,TouchableOpacity,Text} from 'react-native';
import {
    responsiveHeight,
  } from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ alignContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('QrCodeScreen')}
                style={styles.loginBtn}>
                
                <Text style={{ color: 'white' }}>Scan Barcode</Text>
                <Icon name={'scanner'} color={'white'} size={23} style={{position:'absolute',left:90}} />

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('QrGenerate')}
                style={styles.loginBtn}>
                <Text style={{ color: 'white' }}>Generate Qrcode</Text>
                <Icon name={'qrcode'} color={'white'} size={23}  style={{position:'absolute',left:85}}/>

            </TouchableOpacity>

        </View>
    )
}

export default SplashScreen;
const styles = StyleSheet.create({
    loginBtn: {
        width: "90%",
        backgroundColor: "#000",
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        top: responsiveHeight(21),
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 50,
        },
        shadowOpacity: 0.8,
        shadowRadius: 16.00,
        elevation: 10,
      },

})