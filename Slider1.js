import { Text, View , TextInput,StyleSheet,Pressable } from 'react-native'
import React, { Component } from 'react'


export function Slider1(){
    return (
        <View>
            <View>
               <Text style={styles.text}>Home</Text>
            </View>

            <View>
                <TextInput 
                style={styles.textinput}
                  placeholder='Grocery'  
                />

                <TextInput 
                style={styles.textinput}
                  placeholder='Rice'  
                />
            </View>

            <View style={styles.emptydiv}>
            </View>

            <View style={styles.middlediv}>
                <Text style={styles.middledivtext}>
                    productshow
                </Text>
            </View>
            <View style={styles.emptydiv}>
            </View>
            <View>
                <Text style={styles.slidertext}> slider Name</Text>
                <TextInput style={styles.textinput}
                placeholder='slider Name *'
                />
             </View>
             <View style={styles.emptydiv}>
            </View>
            <View style={styles.imagetextdiv}>
                <Text style={styles.imagetext}>Images</Text>
            </View>
            
   <View style={styles.largeemptydiv}>


   </View>
   <View style={styles.buttondiv}>

<Pressable style={styles.pressable1}>

 <Text style={styles.buttontext}>Submit</Text>

</Pressable>

</View>
            

        </View>
    )}


const styles = StyleSheet.create({

    text:{
        fontSize:20,
        paddingLeft:50,
        paddingTop:10

    },

    textinput:{
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        fontSize:20,
    },
    emptydiv:{
        height:7,
        backgroundColor:'lightgrey',
    },
    middlediv:{
        height:50,
        alignItems:'center',
        
        

    },
    middledivtext:{
        fontSize:20,
        paddingTop:10,
        
    },
    slidertext:{
        paddingTop:20,
        paddingLeft:20,
        fontSize:20
    },
    imagetext:{
        fontSize:20,
        paddingLeft:20,
        paddingTop:10
    },
    imagetextdiv:{
        height:50
    },
    largeemptydiv:{
        height:300,
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