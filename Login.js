import React, {useContext, useState} from 'react'
import {Image,View, Text, TextInput, KeyboardAvoidingView, ScrollView,StyleSheet} from 'react-native'
import  {globalStyles} from './globalStyles'
import ImagePickerExample from './ImagePicker';
import { StatusBar } from 'expo-status-bar';
import PlayerContext from './PlayerContext';

/////////////////// LOGINSCREEN ////////////////////////////

export default function LoginSreen({navigation}){

    const [name,setName] = useState("aa")
    const [selfie,setSelfie] = useState(require('./avatar-31.png'))

    // const {player, setPlayer} = useContext(PlayerContext)
    // const eliza=()=>{setPlayer("ELiza")}
    const player= React.useContext(PlayerContext)
  
    return (     
    <KeyboardAvoidingView style={globalStyles.container}  >
      <ScrollView   >
        <View    style={globalStyles.login}> 
          <Text style={{color: '#ffd53a', fontWeight:'bold',fontSize: 40, marginBottom: 1}}> 
            BONJOUR !</Text>
          <Image source={selfie} style={{ width: 150, height: 150 ,borderRadius:50}} />
          <ImagePickerExample setSelfie={setSelfie}/>
          <Text style={{color: '#f16172', fontWeight: 'bold', fontSize: 25, marginTop: 10}}> 
          PRÉNOM : </Text>
          <TextInput style={{backgroundColor: "skyblue", color: "white",fontSize: 40,
            borderRadius:10 , marginTop: 10, paddingHorizontal:20, fontWeight:'bold' }}
            placeholder='............'
            // placeholder={player.firstName}
            onChangeText={(text)=>setName(text.toUpperCase())}
            onEndEditing={() => {
console.log("name Login.js : " + name)
                // Player.firstName="totolasticol"
                // player()
                if (name!=""){
   navigation.navigate('GAME', {
                itemId: name,
                selfie : selfie,
                level: "1"
            })
                }
           
            }}
          />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    );
  }
  ///////////////////////////////////////////




// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });