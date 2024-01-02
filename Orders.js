import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable,Image} from 'react-native';
import { ScrollView } from 'react-native-web';

export function Orders(){
  return (
    <View>


        <View style={styles.rowview}>
            <View style={styles.imagediv}>
                <Text>place image here</Text>
            </View>
            <View styles={styles.textdiv}>
                <Text style={styles.text1}>#Order:135</Text>
                <Text style={styles.text2}>1 Count</Text>
                <Text style={styles.text3}>ToTal:103.0</Text>
                <Text style={styles.text4}>Status:Ordershipped</Text>
                <Text style={styles.text5} >11.07.2023 8:58</Text>
            </View>
        </View>


        <View style={styles.smalldiv}></View>



        <View style={styles.rowview}>
            <View style={styles.imagediv}>
                <Text>place image here</Text>
            </View>
            <View styles={styles.textdiv}>
                <Text style={styles.text1}>#Order:135</Text>
                <Text style={styles.text2}>1 Count</Text>
                <Text style={styles.text3}>ToTal:103.0</Text>
                <Text style={styles.text4}>Status:Ordershipped</Text>
                <Text style={styles.text5} >11.07.2023 8:58</Text>
            </View>
        </View>



        <View style={styles.smalldiv}></View>



        <View style={styles.rowview}>
            <View style={styles.imagediv}>
                <Text>place image here</Text>
            </View>
            <View styles={styles.textdiv}>
                <Text style={styles.text1}>#Order:135</Text>
                <Text style={styles.text2}>1 Count</Text>
                <Text style={styles.text3}>ToTal:103.0</Text>
                <Text style={styles.text4}>Status:Ordershipped</Text>
                <Text style={styles.text5} >11.07.2023 8:58</Text>
            </View>
        </View>



        <View style={styles.smalldiv}></View>


        <View style={styles.rowview}>
            <View style={styles.imagediv}>
                <Text>place image here</Text>
            </View>
            <View styles={styles.textdiv}>
                <Text style={styles.text1}>#Order:135</Text>
                <Text style={styles.text2}>1 Count</Text>
                <Text style={styles.text3}>ToTal:103.0</Text>
                <Text style={styles.text4}>Status:Ordershipped</Text>
                <Text style={styles.text5} >11.07.2023 8:58</Text>
            </View>
        </View>




        <View style={styles.smalldiv}></View>




        <View style={styles.rowview}>
            <View style={styles.imagediv}>
                <Text>place image here</Text>
            </View>
            <View styles={styles.textdiv}>
                <Text style={styles.text1}>#Order:135</Text>
                <Text style={styles.text2}>1 Count</Text>
                <Text style={styles.text3}>ToTal:103.0</Text>
                <Text style={styles.text4}>Status:Ordershipped</Text>
                <Text style={styles.text5} >11.07.2023 8:58</Text>
            </View>
        </View>



        <View style={styles.smalldiv}></View>




        <Text style={{fontSize:20}}>add bottom nav bar here</Text>
            
    </View>


  )}
  const styles = StyleSheet.create({

    rowview:{
        display:'flex',
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        
        height:120
    },
    text1:{
        fontSize:20,
        paddingLeft:120,
        color:'blue'

    },
    text2:{
        fontSize:15,
        paddingLeft:120,
        color:'darkgrey'

    },
    text3:{
        fontSize:17,
        paddingLeft:120

    },
    text4:{
        fontSize:15,
        paddingLeft:120,
        color:'darkgrey'

    },
    text5:{
        fontSize:15,
        paddingLeft:120,
        color:'darkgrey'

    },
    smalldiv:{
        backgroundColor:'grey',
        height:5,
       
    }
    




  })
    