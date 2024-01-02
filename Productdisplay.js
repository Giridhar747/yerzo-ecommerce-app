import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable } from 'react-native';

export function Productdisplay(){
  return (
    <View>
        <View style={styles.rowview}>
            <View style={styles.display}>
                <Text>Pizzza</Text>

            </View>
            <View style={styles.display}>
                <Text>Pizzza</Text>
            </View>
        </View>
        <View style={styles.rowview}>
        <View style={styles.display}>
                <Text>Pizzza</Text>

            </View>
            <View style={styles.display}>
                <Text>Pizzza</Text>
            </View>
       </View>
       <Text style={{fontSize:40}}>add bottom navigation and images</Text>

    </View>
  )}

  const styles = StyleSheet.create({

    display:{
        backgroundColor:'red',
        height:150,
        width:170,
        borderWidth:1,
        alignItems:'center',
        margin:20
        
    },
    rowview:{
        display:'flex',
        flexDirection:'row',
        
    }


  })