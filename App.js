import React, { useEffect } from 'react';
import { Image, Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView,ScrollView, TouchableHighlightComponent } from 'react-native';
import { NavigationContainer, useLinkProps} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Login from "./Login"
import GifsScreen from "./Gifs"
import GameScreen from "./Game"
import LoginScreen from "./Login"
import FlatButton from './Button';
import Ionicons from 'react-native-vector-icons/Ionicons'
import PlayerContext from './PlayerContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// const tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={LoginScreen} />
//     </Stack.Navigator>
//   );
// }

/////////////////// APP ////////////////////////////
export default function App() {

  const [level, setLevel] = React.useState(0)
  // const PlayerContextValue = React.useMemo(()=>({level, setPlayer}),[])
  let isSignedIn = true
  return(
    // <PlayerContext.Provider value={PlayerContextValue}>
          <PlayerContext.Provider value={{level, updateLevel:setLevel}}>


  <NavigationContainer>
        {/* <PlayerContext.Provider value={{firstName:"totolitoto", lastName: 4}}> */}


        <Stack.Navigator
      screenOptions={
        ({route}) => ({
          StackBarIcon: ({focused, color, size}) => {
            let iconName ;
            if (route.name == "HOME") {
              iconName = "home"
            } else if (route.name == "GAME") {
              iconName = 'game-controller-outline'
            }  else if (route.name == "IMAGE") {
              iconName = 'image-outline'
            }
            return <Ionicons name={iconName} size={30} color={focused?'#f16172' :'black'} />
          },
        })
      }  
    >

      <Stack.Screen options={{
        headerShown: false,
        StackBarShowLabel: false,
        StackBarLabel: ({focused, color, size}) => (
          <Text style={{color: focused ? '#ffd53a' : color}}>ACCUEIL</Text>
        ),
      }} name='HOME' component={LoginScreen} />

      <Stack.Screen options={{
        headerShown: false,
        StackBarShowLabel: false,
        StackBarLabel: ({focused, color, size}) => (
          <Text style={{color: focused ? '#ffd53a' : color}}>JEU</Text>
        ),
      }} name='GAME' component={GameScreen} />

      <Stack.Screen options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabel: ({focused, color, size}) => (
          <Text style={{color: focused ? '#ffd53a' : color}}>IMAGE</Text>
        ),
      }} name='IMAGE' component={GifsScreen} />

      
          
    </Stack.Navigator>





    {/* <tab.Navigator
      screenOptions={
        ({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName ;
            if (route.name == "HOME") {
              iconName = "home"
            } else if (route.name == "GAME") {
              iconName = 'game-controller-outline'
            }  else if (route.name == "IMAGE") {
              iconName = 'image-outline'
            }
            return <Ionicons name={iconName} size={30} color={focused?'#f16172' :'black'} />
          },
        })
      }  
    >

      <tab.Screen options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabel: ({focused, color, size}) => (
          <Text style={{color: focused ? '#ffd53a' : color}}>ACCUEIL</Text>
        ),
      }} name='HOME' component={HomeStack} />

      <tab.Screen options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabel: ({focused, color, size}) => (
          <Text style={{color: focused ? '#ffd53a' : color}}>JEU</Text>
        ),
      }} name='GAME' component={GameScreen} />

      <tab.Screen options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabel: ({focused, color, size}) => (
          <Text style={{color: focused ? '#ffd53a' : color}}>IMAGE</Text>
        ),
      }} name='IMAGE' component={GifsScreen} />

      
          
    </tab.Navigator> */}
  
  </NavigationContainer>
  </PlayerContext.Provider>


  )
}





// const isSignedIn=true
// const tabScreens = () => {
//   return (

//     <tab.Screen options={{
//       headerShown: false,
//       tabBarShowLabel: false,
//       tabBarLabel: ({focused, color, size}) => (
//         <Text style={{color: focused ? '#ffd53a' : color}}>ACCUEIL</Text>
//       ),
//   }} name='HOME' component={LoginScreen} />
//   )
// }












/////////////////////////////////////////////////////////



/////////////////// STYLE ////////////////////////////



// import logo from './assets/logo.png'; 

{/* <Button onclick={   setSelfie(require('./avatar-3.png'))} title="love" /> */}
{/* <ImagePickerExample blaz={selfie}/> */}
{/* <Image source={{ uri: 'https://cdn2.thecatapi.com/images/a98.jpg' }} style={{ width: "50%", height: "25%" , borderRadius: 20}} /> */}


{/* <Button title={"OK"} style={{backgroundColor: "green", color: "white",fontSize: 30,
borderRadius:10 , fontWeight:'bold' }}
  onPress={() => {
  navigation.navigate('GAME', {
    itemId: name,
    // otherParam: 'anything you want here',
  });}}
  /> */}


          // function ImageScreen() {
//   return (
//     <View style={styles.container}>
//       <Text> PICS PICS PICS </Text>
//     </View>
//   )
// }

////////////////////////////// HOMETABS ///////////////////////////////
// function HomeTabs() {
//   return (
//     <tab.Navigator
  //     screenOptions={
  //       ({route}) => ({
  //       tabBarIcon: ({focused, color, size}) => {
  //         return <Ionicons name={"home"} size={30} color={focused?'#f16172' :'black'}
  //         />  }, }) }    >
//        <tab.Screen options={{
//           headerShown: false,
//           tabBarShowLabel: false,
//           tabBarLabel: ({focused, color, size}) => (
//             <Text style={{color: focused ? '#ffd53a' : color}}>ACCUEIL</Text>
//           ),
//         }} name='HOME' component={HomeScreen} />
//     </tab.Navigator>  )}
//////////////////////////////////////////////////////