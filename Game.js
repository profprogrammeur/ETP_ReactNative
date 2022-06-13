import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { Image, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer, useLinkProps} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import FlatButton from './Button';
import { Audio } from 'expo-av';
import PlayerContext from './PlayerContext';
import Stars from './Stars';



export default function GameScreen({route,navigation}) {

  const {level,updateLevel} = useContext(PlayerContext)
// const lol= ()=>updateLevel(8)

////////////////SON////
    
    const [sound, setSound] = React.useState();
    async function playSound(el) {
        console.log(el)
    const { sound } = await Audio.Sound.createAsync(
       el
    );
    setSound(sound);
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  ///////////////////////////////

    // const player = useContext(PlayerContext);
    // player = 2
    const {itemId,selfie} = route.params
    // const itemId =player.firstName
    // route.params.itemId!="undefined"? (itemId = route.params.itemId) : (console.log("nop"))
    // const selfie = 4
    // console.log("params route : " + route.params.selfie)
    console.log("itemID39 = " + itemId)
  let name = itemId
  let selfi = selfie
    // itemId==undefined? (name="Ratoinus") : (name = itemId)
    console.log("name41 : " +  name)

    const [score, setScore] = React.useState(0)

    // let score = 0
    const checkName = (i) => {
        if (i==4) {if (score>3) {  
          setScore(prevScore => prevScore + 1) ;playSound(require('./ding.mp3'))
          if (level<9){updateLevel(level+1)}else (updateLevel(1))
          playSound(require('./bravo.mp3'))
           setTimeout ( ()=> { 
            navigation.navigate('IMAGE',{
            itemId: name,
            selfie : selfi,
        });
            setScore(0)},4000)
            } else {setScore(prevScore => prevScore + 1) ; playSound(require('./ding.mp3'))}} 
             else {if (score>0) {setScore(prevScore => prevScore - 1); playSound(require('./error.mp3'))}
            else {setScore(0); playSound(require('./error.mp3'))} }
        }

    //colors

    let colors = ["mediumpurple", "magenta", "limegreen","deepskyblue","orange"]
    const shuffledArr = array => array.sort(() => 0.5 - Math.random());
    colors = shuffledArr(colors)
    // const color1 = colors.pop()
    const color4=colors[4]

    // JSON.stringify(itemId)
    const items = [
    <FlatButton key={name+4} text={name} onPress={()=>checkName(4)} bgColor={color4} color={'white'}/>
    ]

    // create a random word with letter from name
    const randomizeName = (name) =>{
    const nameRandom = []
    let nameArray=name.split('')
        for ( let i=0; i<name.length;i++) {
        let num = Math.floor(Math.random()*nameArray.length)
        nameRandom.push(nameArray[num])
        nameArray.splice(num,1)
        }
    return nameRandom.join('')
    }

    // push random words exept name
    for (let i=0; i<4; i++) {
        let goodRandomizeName = randomizeName(name)
        if (goodRandomizeName !== name) {
        let color = colors[i]
        items.push( <FlatButton key={goodRandomizeName+i} text={goodRandomizeName} onPress={()=>checkName(i)} bgColor={color} color={'white'} />)
        } 
        else (i-=1)}
    
// const colors = ["DarkMagenta"]

    // shuffle items array
const itemsShuffled = items.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);

const scoreBtn =   <FlatButton key={"score"} width={20} text={score}  bgColor={"#f16172"} color={"yellow"} />
const levelBtn =   <FlatButton key={"level"} width={20} text={level}  bgColor={"orange"} color={"black"} />


{/* <FlatButton key={"score"} text={score}  bgColor={"#f16172"} style={{ width: 10}} /> */}

    return (
      // <PlayerContext.Provider value={{firstName:"bobbyyyy",level:3}}>



      <View style={styles.container}>
           {/* <Button title="Play Sound" onPress={playSound} /> */}
        <View style={{width:"100%", flexDirection: "row", alignItems:'center', justifyContent: 'center'}}>
          {/* <View style={{marginLeft:80, paddingLeft:0}}>
          {levelBtn}
          </View> */}
                  
          <Image source={selfie} style={{marginLeft:0, marginBottom: 6,width: 110, height: 110,borderRadius:50 }} />
          {/* <View style={{marginRight:0,paddingLeft:0}}> */}
          {/* {scoreBtn} */}
          {/* </View> */}
        </View>
{/* /////////////////////////////////////// */}
        <Stars numStars={score} />
{/* //////////////////////////////////////////////// */}
        <Text>Où est écrit {name} ?</Text>
     
        {itemsShuffled}

      </View> 
      // </PlayerContext.Provider>

    )
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
