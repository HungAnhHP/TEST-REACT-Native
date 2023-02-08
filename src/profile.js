import {  Text, StyleSheet, View } from 'react-native'
import React from 'react'
function ProfileScreen (){
    return (
               <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <Text>HI <Text></Text></Text>
                      <View>

                     </View>
                   </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column-reverse",
    padding:20,
    // justifyContent: 'space-around'
    alignItems:'center',
    //flexWrap: "wrap",
    height:700,
    backgroundColor:'grey',
  }
})
export default ProfileScreen;