import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, ShadowPropTypesIOS, ToastAndroid, Button } from 'react-native';

export default function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
      <Text style={styles.flexHead}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </View>

      <View style={styles.hll}>
      <View style={styles.flex}>
        <Text style={styles.flexText}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} style={styles.insert}/>
      </View>

      <View style={styles.flex}>
        <Text style={styles.flexText}>Password</Text>
        <TextInput placeholder='hellllllloooooo' value={password} onChangeText={setPassword} style={styles.insert}/>
      </View>
      </View>

      <View style={styles.flex}>
        <Button title='asdsa'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b4540',
  },

  flex: {
    margin: 5,
    padding: 10,
    marginHorizontal: '15%',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: '#452b30',
  },

  hll: {
    marginVertical: '10%',
  },

  flexHead: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  flexText:  {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
  },

  insert: {
    padding: 5,
  },

  button: {
    backgroundColor: 'white',
  },
});
