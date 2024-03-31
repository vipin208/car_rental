import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MotiView, useAnimationState, useDynamicAnimation } from 'moti'
import { Easing } from 'react-native-reanimated'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
  import LoaderKit from 'react-native-loader-kit'
const Profile = () => {
    const[clicked,setclicked]=useState(false)
    const animation=useDynamicAnimation(()=>{
        return{
            width:300,
            height:48,
            borderRadius:25
    }
    })
    const animateSate=useAnimationState({
        from:{
          opacity:0,
          scale:0.9
        },
        to:{
            opacity:1,
            scale:1
        },
        active:{
            opacity:1.1,
            scale:1
        },
        nonActive:{
            opacity:0.5,
            scale:0.5
        }
    })
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:'center'}}>
        {/* <View>
        {
            [...Array(3).keys()].map((index)=>{
                return(
                <MotiView
                from={{opacity:0.7,scale:0.5}}
                animate={{opacity:0,scale:2}}
                transition={{
                    type:'timing',
                    duration:3000,
                    easing:Easing.out(Easing.ease),
                    delay:index*400,
                    repeatReverse:false,
                    loop:true
                }}
                key={index}
                style={[{width:50,height:50,backgroundColor:'black',borderRadius:25},StyleSheet.absoluteFillObject]}
                >
              <View style={{width:50,height:50,backgroundColor:'black',borderRadius:25}}/>
                </MotiView>
                )
            })
        }
        </View> */}
        <TouchableOpacity 
        onPress={()=>{
         if(clicked==true){
            setclicked(false)
            animation.animateTo({width:300,height:48,borderRadius:22})
         }else{
            setclicked(true)
            animation.animateTo({width:50,height:48,borderRadius:25})
         }
        }}>
            <MotiView
            state={animation}
            transition={{type:'timing',duration:500}}
            style={{width:300,height:48,backgroundColor:'black',justifyContent:'center'}}
            >
         { clicked==true?<BallIndicator color='white' size={20} animationDuration={800}/>:<Text style={{textAlign:'center',color:'white'}}>Login</Text>}
            </MotiView>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})