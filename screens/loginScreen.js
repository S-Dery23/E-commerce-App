import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, Image, View, TextInput, ShadowPropTypesIOS, ToastAndroid } from 'react-native';




export default function App({navigation}) {

  return (
    <View style={styles.container}>
      <View>
          <Image source={{uri : "https://th.bing.com/th/id/OIP.2qUyI0p5hT-4jk4G4QVJHwExDM?pid=ImgDet&rs=1"}} style={{margin: 55, width: 230, height: 230, borderRadius: 20, transform: [{ rotate: "45deg" }]}}/>
      </View>
      <View>
        <Text style={{fontSize: 35, fontWeight: "bold"}}>SD-WARES</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
            
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5d8f90',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
})
