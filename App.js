import { TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, TextInput, View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './configFirebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const TEXT={
  lineHeight:30,
  height:45,
  color:'#ffff'
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  content:{
    width:'100%',
    height:'70%',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: "#000000c0"
  },
  header:{
    height:'65%',
    width:'80%',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection: 'column',
  },
  bottom:{
    height:'40%',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:50,
    width:'50%'
  },
  inputText:{
    ...TEXT,
    lineHeight:12,
    height:22,
    width:'60%',
    borderBottomWidth:2,
    borderBottomColor:'white',
    marginLeft:15
  },
  button:{
      borderRadius: 45,
      backgroundColor: '#f0f8ff',
      height: 40, width: 120,
      justifyContent:'center',
      alignItems:'center'
  }
})
const image = { uri: "https://reactjs.org/logo-og.png" };
const Stack = createNativeStackNavigator();
function HomeScreen({ route, navigation}) {
  const Signout = () => {
    auth()
    .signOut()
    .then(() => Alert('User signed out!'));
  }
  const {name} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HI <Text>{name}</Text></Text>
      <View>
        <TouchableOpacity 
          onPress={() => {
            navigation.popToTop()
          }}
          style={styles.button}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function LoginScreen({navigation}) {
   
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login!!")
      navigation.navigate("Home", {name: ""+user.email });
    })
    .catch(error => {
      Alert.alert(error.message)
    })
  }
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login!!")
      navigation.navigate("Home", {name: email });
    })
    .catch(error => {
      alert("Email or password wrong!!!")
    })
  }

  return (
    <ImageBackground style={{height:'100%', width:'100%'}} source={image} resizeMode="cover">
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light"></StatusBar>
      <View style={styles.content}>
          {/* //Input and submit */}
          <View style={styles.header}>
              <View style={styles.input}>
                <Text style={{...TEXT}}>User email</Text>
                <TextInput 
                 style={styles.inputText} 
                 placeholder='Enter email'
                  value={email}
                 onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={styles.input}>
                <Text style={{...TEXT}}>Password</Text>
                <TextInput 
                style={styles.inputText}
                placeholder='Enter password'
                secureTextEntry={true}
                autoFocus={true}
                autoCapitalize="none"
                value={password}
                onChangeText={text => setPassword(text)}
                />
              </View>
              <View>
                <TouchableOpacity 
                  onPress={handleSignIn}
                  style={styles.button}>
                  <Text>Login</Text>
                </TouchableOpacity>
              </View> 
          </View>
          {/* //Create an account */}
          <View style={styles.bottom}>
              <Text style={{...TEXT, }}>Or</Text>
              <TouchableOpacity 
                  style={styles.button}
                  onPress = {handleSignUp}                
              >
                <Text>Create an account</Text>
              </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
 </ImageBackground>
  );
}
  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}