import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable } from 'react-native';

export function Home(){
  return ( 
    <View>
        <View>
            <View style={styles.rowdiv}>
            <Text style={styles.categorytext}>Categories</Text>
            </View>
            <View style={styles.smallproduct}>
                <Text style={styles.grocerytext}>Groceries</Text>
            </View>
        </View>
        <View style={styles.smalldiv}></View>

        <View>
        <View style={styles.rowdiv}>
            <Text style={styles.slidertext}>Slider</Text>
        </View>
        <View style={styles.carousel}>

        </View>
            
        </View>
        <View style={styles.smalldiv}></View>

        <View>
            <View style={styles.rowdiv2}>
            <Text style={styles.subcatgorytext}>Subcategories</Text>
            </View>
            
            <View style={styles.rowdiv3}>
                <View style={styles.subcategories}>
                    <Text>Rice</Text>
                </View>
                <View style={styles.subcategories}>
                    <Text>Rice</Text>
                </View>
                <View style={styles.subcategories}>
                    <Text>Rice</Text>
                </View>
            </View>

            <View style={styles.rowdiv3}>
                <View style={styles.subcategories}>
                    <Text>Rice</Text>
                </View>
                <View style={styles.subcategories}>
                    <Text>Rice</Text>
                </View>
                <View style={styles.subcategories}>
                    <Text>Rice</Text>
                </View>

            </View>

           <View>
             <View style={styles.rowdiv4}> 
             <Text style={styles.grouptext}>Group</Text></View>
           </View>
           <View style={styles.rowdiv5}>
           <View style={styles.subcategories}>
                    <Text>Rice</Text>
                </View>
                <View style={styles.subcategories}>
                    <Text>Rice</Text>
                </View>

           </View>
        </View>
    </View>
  )}

  const styles = StyleSheet.create({
    categorytext:{
        fontSize:20,
        paddingLeft:20,
        paddingTop:20
    },
    smallproduct:{
        marginLeft:10,
        marginTop:10,
        height:100,
        backgroundColor:'coral',
        width:100

    },
    grocerytext:{
        fontSize:17,

    },
    smalldiv:{
        height:5,
        backgroundColor:'lightgrey'
    },
    slidertext:{
        fontSize:20,
        paddingLeft:20
    },
    carousel:{
        margin:20,
        borderWidth:1,
        height:200,
        width:370,
        backgroundColor:'red'
    },
    subcategories:{
        height:60,
        width:120,
        backgroundColor:'red',
        marginLeft:10
    },
    subcatgorytext:{
        paddingLeft:20,
        fontSize:20
    },
    rowdiv3:{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    },
    grouptext:{
        fontSize:20,
        paddingTop:10,
        paddingLeft:20
    },
    rowdiv5:{
        display:'flex',
        flexDirection:'row'
    }


  })