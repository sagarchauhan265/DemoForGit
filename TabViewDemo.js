import { View, Text,Button,useColorScheme,Appearance} from 'react-native'
import React,{useState} from 'react'

export default function TabViewDemo() {
  const [count,setCount]= useState(0) // boject ,arrary, number styring,boolean, null,
  const colorScheme = Appearance.getColorScheme();
  return (
    <View>
      <Text style={{ color: colorScheme == 'light' ? 'black':'white' }}> Text color{count}</Text>
      <Button
      title='click'
      onPress={()=> setCount(count +1)}/>
    </View>
  )
}