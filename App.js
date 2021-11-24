
//@refresh reset
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Button, LogBox } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import *  as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  
};

// Initialize Firebase
if(firebase.apps.length == 0){
  firebase.initializeApp(firebaseConfig);

}
LogBox.ignoreWarnings(['Setting a timer for a long period of time'])
export default function App() {
  const [user, setUser] = useState(null)
  const [name,setName]  = useState('');
  useEffect(()  =>{
     readUser()
  },[])

 async function readUser(){
 const user = await AsyncStorage.getItem('user')
 if(user){
   setUser(JSON.parse(user))
 }
 }
 if(!user){
   return (<View style={styles.container}>
      <TextInput style={styles.input}  placeholder="Enter your name" value={}/>
   </View>)
 }
  return (
    <View style={styles.container}>
      <Text>We have a user!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,

  },
  input:{
    height:50,
    width:'100%',
    borderWidth:1,
    padding:15,
    borderColor:'gray'

  }
});
