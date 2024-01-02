import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable } from 'react-native';

export function Newnotification1(){
  return (
    <View>

<View>

<Text style={styles.categorytext}>Category</Text>

<TextInput
style={styles.input}
placeholder="Grocery"/>

<TextInput
style={styles.input}
placeholder="Sub Category English*"
/>

<TextInput
style={styles.input}
placeholder="Group*"
/>   

<TextInput
style={styles.input}
placeholder="Products*"
/>
</View>

<View style={styles.smalldiv}>
</View>
<View style={styles.namediv}>
  <Text style={styles.brandtext}>Name</Text>
  <TextInput style={styles.textinput}
  placeholder='Product Name English *'
  />
</View>

<View style={styles.smalldiv}>
</View>

<View>
    <Text style={styles.brandtext}>Details</Text>
    <TextInput style={styles.detailtextbox}
    placeholder='Enter Details'
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
    namediv:{
      height:150
    },
    detailtextbox:{
        margin:10,
        marginTop:10,
        borderWidth:1,
        height:200,
        fontSize:20,
        paddingLeft:130
    }
 });