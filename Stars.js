import { React } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Animated, Easing, useEffect,useRef} from 'react-native';
import {FontAwesome} from "@expo/vector-icons"
import  {globalStyles} from './globalStyles'



// const numStars=5
export default function Stars(props){
    // let state = {
    //     rating: 2,
    //     animation: new Animated.Value(1)
    // }
let animation = new Animated.Value(1)

const animate = () => {
    Animated.timing(animation,{
        toValue: 2,
        duration: 400,
        easing: Easing.ease,
        useNativeDriver: true
    }).start(()=>{
        animation.setValue(1)
    }
    )
}
// animate()
    const animateScale = animation.interpolate ({
        inputRange: [1, 1.5, 2],
        outputRange: [1,1.4,1]
    })
    // const animateOpacity = state.animation.interpolate ({
    //     inpuRange: [1,1.2,2],
    //     outputRange: [1,0.5,1]
    // })

    const animationStyle = {
        transform: [{scale: animateScale}],
        // opacity: animateOpacity
    }


    // useEffect(() => {return ()=>{animate}})
    // useEffect(() => {
   
        console.log("lov")
    //  },[])
     
    let stars = []
    for (let x=1; x<=5;x++){
        stars.push (
            <Animated.View key={`starsView${x}`} style={animationStyle}>
                <FontAwesome key={`stars${x}`} name={ x<= props.numStars? "star" : "star-o"} color="gold" size={32} style={{marginHorizontal: 6 , borderColor: "black"}} /> 
            </Animated.View>
        )
    }

    return (
        <View style={{flexDirection:"row"}}>
             {stars}
        </View>
       


)


}