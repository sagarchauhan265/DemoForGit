import { View, Text, Image, Button ,TextInput} from 'react-native'
import React ,{useEffect,useState}from 'react'
import QRCode from 'react-native-qrcode-svg';
export default function QrCode() {
const [QrValue,setQrValue] = useState("Demo")
const [InputText,setInputText] = useState('')

const onGenerateQrCode =()=>{
    setQrValue(InputText);
}


 const getDataURL =()=> {
    svg.toDataURL(callback);
  }
  
  function callback (dataURL) {
    console.log(dataURL);
  }
    return (
        <View style={{ flex: 1, justifyContent: 'center',  }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <QRCode
                size={300}
                logo={require('./w.png')}
                backgroundColor='transparent'
                value={QrValue}
                getRef={(c) => (svg = c)}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               <TextInput
               style={{width:'80%',height:50,borderColor:'grey',borderWidth:2,borderRadius:10}}
               placeholder='Input text'
               onChangeText={(t)=> setInputText(t)}
               value={InputText}
               />
                <Button
                    title='Ganerate QR Code'
                    onPress={()=> onGenerateQrCode()}
                     />
            </View>


        </View>
    )
}