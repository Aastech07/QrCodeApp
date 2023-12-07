import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Slider from '@react-native-community/slider'
import QRCode from 'react-native-qrcode-svg';
const QrGenerate = () => {
  const [input, setInput] = useState('');
  const [qrcode, setQrcode] = useState('');
  const [qrCodeSize, setQrCodeSize] = useState(200); // Initial size for the QR code

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 400 }}>
      <Text style={{ color: '#3E54AC', fontWeight: 'bold', fontSize: 20, position: 'absolute', alignSelf: 'center', top: 20 }}>
        Generation of QR Code in APX.
      </Text>
      <View style={{ alignSelf: 'center', top: 90, right: 160 }}>
        <FontAwesome5 name="qrcode" size={25} color="black" style={{ left: 20, top: 10, opacity: 0.3 }} />
        <TextInput
          style={{ top: 10, left: 50, position: 'absolute' }}
          placeholder="Generate QR Code..."
          onChangeText={(text) => setInput(text)}
          value={input}
        />
      </View>
      <View style={{ top: 100, position: 'absolute', left: 250 }}>
        <TouchableOpacity
          onPress={() => setQrcode(input)}
          style={{
            borderWidth: 1,
            padding: 6,
            paddingLeft: 40,
            backgroundColor: '#000',
            elevation: 7,
            paddingRight: 40,
            borderRadius: 4,
            right: 15,
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Click</Text>
        </TouchableOpacity>
      </View>

      <View style={{ top: 150, alignSelf: 'center' }}>
        <Slider
          style={{ width: 200, marginBottom: 20 }}
          minimumValue={50}
          maximumValue={340}
          step={1}
          value={qrCodeSize}
          onValueChange={(value) => setQrCodeSize(value)}
          
        />
        <QRCode value={qrcode ? qrcode : 'NA'} size={qrCodeSize} color={'#000'} backgroundColor="white" />
      </View>

    </ScrollView>
  );
};

export default QrGenerate;
