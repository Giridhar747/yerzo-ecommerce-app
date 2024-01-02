import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable,  } from 'react-native';
import Slider from '@react-native-community/slider';
export function Deliverycharge(){
  return (
<View>
<View>

<Text style={styles.categorytext}>Delivery Price</Text>

<TextInput
style={styles.input}
placeholder="Deliver price"/>
</View>

<View style={styles.smalldiv}>
</View>
<View style={styles.deliverydiv}>
   
    <Text style={styles.deliverytext}>Delivery slot</Text>
</View>
<View style={styles.sliderbardiv}>
   <Slider 
   
   style={{width: 400, height: 40}}
   minimumValue={0}
   maximumValue={1}
   minimumTrackTintColor="#FFFFFF"
   maximumTrackTintColor="#000000"
   /> 
   
   
</View>





<View style={styles.smalldiv}>
</View>
<View style={styles.Branddiv}>
  <Text style={styles.brandtext}>Delivery Time</Text>
  <TextInput style={styles.textinput}
  placeholder='Deliver Time'
  />
</View>
<View style={styles.smalldiv}>
</View>
<View style={styles.namediv}>
  <Text style={styles.brandtext}>Range Delivery</Text>
  <TextInput style={styles.textinput}
  placeholder='Enter Order Price'
  />
</View>
<View style={styles.smalldiv}>
</View>

<View style={styles.namediv}>
  <Text style={styles.brandtext}>Order Minimum</Text>
  <TextInput style={styles.textinput}
  placeholder='Enter Order Price'
  />
</View>
<View style={styles.smalldiv1}>
</View>






<View style={styles.buttondiv}>

<Pressable style={styles.pressable1}>

<Text style={styles.buttontext}>Submit</Text>

</Pressable>

</View>





</View>

  )}


  const styles = StyleSheet.create({

    categorytext:{
       marginLeft:50,
       fontSize:25,
    },
    input: {
       height: 40,
       margin: 10,
       borderWidth: 1,
       padding: 10,
    },
    smalldiv:{
       height:7,
       backgroundColor:"lightgrey",
    },
    categoryshow:{
       fontSize:20,
       paddingTop:10
    },
    categoryshowdiv:{
       height:50,
       alignItems:'center'
    },
    emptydiv:{
       height:370,
       backgroundColor:'lightgrey'
    },
    buttondiv:{
       height:50,
       alignItems:'center'
    },
    pressable1:{
       marginTop:20,
       height:40,
       width:300,
       backgroundColor:'coral',
       alignItems:'center',
       borderRadius: 30
 
    },
    buttontext:{
       paddingTop:7,
       color:'white',
       fontSize:17
    },
    brandtext:{
      fontSize:20,
      paddingLeft:20,
      paddingTop:20,
    },
    textinput:{
      height: 40,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      paddingTop:10,
      marginTop:30

    },
    Branddiv:{
      height:150
    },
    namediv:{
      height:130
    },
    deliverydiv:{
        
        height:50,
        alignItems:'center',
        
    },
    deliverytext:{
        fontSize:20,
        paddingTop:10

    },
  
    sliderbardiv:{
      height:70
    },
    smalldiv1:{
      height:30,
      backgroundColor:'lightgrey'
    }
 });