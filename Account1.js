import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable } from 'react-native';

export function Account1(){
  return (
    <View>
        <View>
            <Text style={styles.maintext}>Mathaji Provision store</Text>
            <Text style={styles.phone}>+91 6383096243</Text>
        </View>
        <View style={styles.smalldiv}>
        </View>

        <View style={styles.subdiv}>
            <Text style={styles.subdivtext}>Delivery charge</Text>
        </View>

        <View style={styles.smalldiv}>
        </View>

        <View style={styles.subdiv}>
            <Text style={styles.subdivtext}>Change Language</Text>
        </View>
        
        <View style={styles.smalldiv}>
        </View>

        <View style={styles.subdiv}>
            <Text style={styles.subdivtext}>Rate us on play store</Text>
        </View>

        <View style={styles.smalldiv}>
        </View>
        
        <View style={styles.subdiv}>
            <Text style={styles.subdivtext}>Send Feedback</Text>
        </View>
        <View style={styles.smalldiv}>
        </View>
        <View style={styles.subdiv}>
            <Text style={styles.subdivtext}>Share</Text>
        </View>
        <View style={styles.smalldiv}>
        </View>
        <View style={styles.subdiv}>
            <Text style={styles.subdivtext}>Help</Text>
        </View>
        <View style={styles.smalldiv}>
        </View>
        <View style={styles.subdiv}>
            <Text style={styles.subdivtext}>About</Text>
        </View>
        <View style={styles.smalldiv}>
        </View>
        
        <View style={styles.subdiv}>
            <Text style={styles.subdivtext}>Logout</Text>
        </View>

        <View style={styles.smalldiv2}>
            <Text style={styles.smalldivtext}>App version</Text>
            <Text>V1.2.2</Text>
        </View>
        <View>
            <Text>Navbar</Text>
        </View>
    </View>
  )}

  const styles = StyleSheet.create({

    maintext:{
        fontSize:20,
        paddingLeft:70,
        paddingTop:20
    },
    phone:{
        fontSize:20,
        paddingLeft:70,
        paddingBottom:20
    },
    smalldiv:{
        height:7,
        backgroundColor:"lightgrey",
     },
     subdivtext:{
        fontSize:20,
        paddingLeft:70,
        paddingTop:15
     },
     subdiv:{
        height:60,
       
     },
     smalldiv2:{
        height:70,
        backgroundColor:'lightgrey',
        paddingTop:10,
        alignItems:'center'

     },
     smalldivtext:{
        fontSize:20
     }

  })
