import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable } from 'react-native';

export function Edituser1(){
  return (
    <View>
      <View>
        <Text style={styles.Businesstext}>Business</Text>
        <Text style={styles.paratext}>Tell us what you love about the app, 
        or what we could be doing better.</Text>
      </View>
      <View>
        <TextInput style={styles.input}
        placeholder='Enter Your name'
        />
      </View>

      <View style={styles.buttondiv}>

      <Pressable style={styles.pressable1}>

      <Text style={styles.buttontext}>Submit</Text>

      </Pressable>

      </View>

    </View>
  )}

  const styles = StyleSheet.create({

    Businesstext:{
      fontSize:30,
      paddingTop:20,
      paddingLeft:20
    },
    paratext:{
      paddingLeft:20,
      fontSize:20

    },
    input: {
      height: 60,
      margin: 10,
      borderWidth: 1,
      padding: 10,
    },
    buttondiv:{
      height:50,
      alignItems:'center'
   },
   pressable1:{
      marginTop:20,
      height:40,
      width:350,
      backgroundColor:'coral',
      alignItems:'center',
      borderRadius: 30

   },
   buttontext:{
      paddingTop:7,
      color:'white',
      fontSize:17
   }


  })