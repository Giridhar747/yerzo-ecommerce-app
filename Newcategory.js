import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable } from 'react-native';

export function Newcategory(){
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
        placeholder="Sub Category Tamil*"
      />   

      </View>

   <View style={styles.smalldiv}>
      
   </View>

   <View style={styles.categoryshowdiv}>

      <Text style={styles.categoryshow}>Categoryshow</Text>

   </View>


   <View style={styles.smalldiv}>
   </View>

   <View style={styles.categoryshowdiv}>
      
      <Text style={styles.categoryshow}>Images</Text>

   </View>

   <View style={styles.emptydiv}>


   </View>


   <View style={styles.buttondiv}>

     <Pressable style={styles.pressable1}>

      <Text style={styles.buttontext}>Submit</Text>

     </Pressable>

   </View>


</View>
 )
}

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
      height:5,
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
   }
});
