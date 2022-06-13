import { StatusBar } from 'expo-status-bar';
import React, {  useContext,useEffect } from 'react';
import { Image, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer, useLinkProps} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Login from "./Login"
import FlatButton from './Button';
import PlayerContext from './PlayerContext';
import images from './imageManager';
import Ionicons from 'react-native-vector-icons/Ionicons';





export default function Gifs({route,navigation}) {
  const player = useContext(PlayerContext);
console.log("player.level = " + player.level)
console.log("player.firstName = " + player.firstName)
  const {itemId,selfie} = route.params
  let name = itemId
  let selfi = selfie
  // let levelito= 5
  // console.log("level  = " + level)
// const [img, setImg] = useState(`./picscats/cat${4}.jpg`)
// const [img, setImg] = useState('https://cdn2.thecatapi.com/images/61f.gif')
console.log("images : " +images.cat1)
const getCat =() => {
  fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif')
  .then((res) => {
    return res.json()
  }).then((data)=> {
    console.log(data[0])
    setImg(data[0].url)
  })
}
useEffect(() => {
  // getCat()
}, [])
// let picsUrl= `./picscats/cat${player.level}.jpg`
let picsUrl= images.cats[player.level-1]
console.log("picsUrl : " + picsUrl)
  return ( 
    <View style={styles.container}>
      {/* <Image source={{ uri: img }} style={{ width: "50%", height: "50%", borderRadius:20 , marginBottom:15}} /> */}
      {/* <Image source={require(`./picscats/cat${levelito}.jpg`) } style={{ width: "100%", height: "70%", borderRadius:20 , marginBottom:15}} /> */}
      <Image source={picsUrl } style={{ width: "100%", height: "70%", borderRadius:20 , marginBottom:15}} />

              {/* <Text style={{color: 'pink', fontSize: 36, textAlign: 'center'}}> 
      VIVE {"\n"} LES CATASSES</Text> */}

      {/* <FlatButton text='REJOUER' onPress={getCat} bgColor={"orange"}/> */}

      <Ionicons name={'arrow-back-circle'} size={100} style={{color : 'orange', margin : 5}}
      onPress={()=> navigation.navigate('GAME',{
        itemId: name,
        selfie : selfi
    })}
      />

      {/* <FlatButton text='REJOUER' onPress={()=> navigation.navigate('GAME',{
                itemId: name,
                selfie : selfi
            })} bgColor={"orange"}/> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    borderRadius:10,
    fontWeight:'bold',
    textTransform:'lowercase'
  }
});
