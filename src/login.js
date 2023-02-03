// import { StyleSheet, ImageBackground, SafeAreaView, TextInput, View, Text } from 'react-native'
// import React from 'react'
// import { StatusBar } from 'expo-status-bar'
// import { TouchableOpacity } from 'react-native-web'
// import { Feather } from '@expo/vector-icons';

// const TEXT={
//   lineHeight:30,
//   height:30,
//   color:'white'
// }
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center'
//   },
//   content:{
//     width:'100%',
//     height:'70%',
//     justifyContent:'space-between',
//     alignItems:'center',
//     backgroundColor: "#000000c0"
//   },
//   header:{
//     height:'60%',
//     width:'80%',
//     alignItems:'center',
//     justifyContent:'space-around',
//     flexDirection: 'column',
//   },
//   bottom:{
//     height:'40%',
//     justifyContent:'space-around',
//     alignItems:'center'
//   },
//   input:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center',
//     height:50,
//     width:'50%'
//   },
//   inputText:{
//     ...TEXT,
//     height:20,
//     width:'60%',
//     borderColor:'#000000c0',
//     borderBottomWidth:1,
//     borderBottomColor:'white',
//   },
//   button:{
//       borderRadius: 45,
//       backgroundColor: '#f0f8ff',
//       height: 40, width: 120,
//       justifyContent:'center',
//       alignItems:'center'
//   }
// })
// const image = { uri: "https://reactjs.org/logo-og.png" };
// export default login = () => {
//   return (
//    <ImageBackground style={{height:'100%', width:'100%'}} source={image} resizeMode="cover">
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light"></StatusBar>
//         <View style={styles.content}>
//             {/* //Input and submit */}
//             <View style={styles.header}>
//                 <View style={styles.input}>
//                   <Text style={{...TEXT}}>User name</Text>
//                   <TextInput 
//                    style={styles.inputText} 
//                    placeholder='Enter name'/>
//                 </View>
//                 <View style={styles.input}>
//                   <Text style={{...TEXT}}>Password</Text>
//                   <TextInput 
//                   style={styles.inputText}
//                   placeholder='Enter password'
//                   secureTextEntry={true}
//                   autoFocus={true}
//                   autoCapitalize="none"/>
//                   <Feather name="eye" size={24} color="white"
//                   style={{
//                     position: 'absolute',
//                     top: 12, left: 280,                      
//                   }}/>
//                 </View>
//                 <View>
//                   <TouchableOpacity style={styles.button}>
//                     <Text>Login</Text>
//                   </TouchableOpacity>
//                 </View>
//             </View>
//             {/* //Create an account */}
//             <View style={styles.bottom}>
//                 <Text style={{...TEXT, }}>Or</Text>
//                 <TouchableOpacity style={styles.button}>
//                   <Text>Create an account</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//       </SafeAreaView>
//    </ImageBackground>
//   )
// }
