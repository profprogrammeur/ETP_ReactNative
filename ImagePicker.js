
import React, { useState, useEffect } from 'react';
import { Text,Button, Pressable,Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function ImagePickerExample({setSelfie}) {

  const [image, setImage] = useState();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
    //   setImage(result.uri);
      setSelfie({ uri: result.uri })
    }
  };

    const takeImage = async () => {    
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your camera!");
          return;
        }
        const result = await ImagePicker.launchCameraAsync();
        console.log(result);
    if (!result.cancelled) {
    //   setImage(result.uri);
    setSelfie({ uri: result.uri })
    }
  };
//   const selfie= require('./avatar-31.png')
//   setImage( selfie);
//   require('./avatar-31.png')
  return (
    <View style={{  alignItems: 'center', flexDirection : 'row', marginTop : 10}}>
        {/* <View style={{  alignItems: 'center', justifyContent: 'center' }}></View> */}
         {/* {!image && <Image source={require('./avatar-31.png')} style={{ width: 150, height: 150 }} />} */}
         {/* {!image && <Image source={props.blaz} style={{ width: 150, height: 150 }} />} */}
        {/* {image && <Image source={{ uri: image }} style={{ width: 120, height: 120,borderRadius:50 }} />} */}

        <Pressable  onPress={pickImage} style={{ backgroundColor:'orange', marginVertical:10,marginRight:10, borderRadius:10}} > 
        <Ionicons name={'camera'} size={50} style={{color : 'white', margin : 5}} />
        {/* <Text style={{fontSize:25,color:"white"}}> CHOISIR PHOTO </Text> */}
        </Pressable>
        <Text style={{fontSize:20,color:"skyblue",textAlign: "center", fontWeight: "bold"}}> CHOISIR {"\n"} PHOTO </Text>
        <Pressable   onPress={takeImage} style={{ backgroundColor:'orangered', marginVertical:10, marginLeft:5 , borderRadius:10}} > 
        <Ionicons name={'image'} size={50} style={{color : 'white', margin : 5}} />
        {/* <Text style={{fontSize:25,color:"white"}}>PRENDRE PHOTO </Text> */}
        </Pressable>
    </View>
  );
}