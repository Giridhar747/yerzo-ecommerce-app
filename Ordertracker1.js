import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable,Image} from 'react-native';
import { ScrollView } from 'react-native-web';

export function Ordertracker1(){
  return (
    
    <View>
        <View style={styles.ordertracker}>
            <Text>Order tracker should be here please place it</Text>
        </View>
        <View style={styles.smalldiv}>
        </View>
        <View style={styles.paymentdiv}>
            <Text style={styles.payment1}>Paymnet</Text>
            <TextInput
            style={styles.codtext}
            placeholder='COD'
            
            />
        </View>
        <View style={styles.smalldiv}>
        </View>
        <View>
            <Text style={styles.addresstext}>Addresss</Text>
            <Text style={styles.addresstext1}>karthi               Phonenumber:8825562038</Text>
            <Text style={styles.addresstext2}>No:2 karimnagar ramjinagar nadaveerampudu 
                naduveerapattu-602109
            </Text>
        </View>
        <View style={styles.smalldiv}>
        </View>
        <View style={styles.productdiv}>
            <Text style={styles.producttext}>Product</Text>
            <View style={styles.rowdiv}>
                <View style={styles.finalproduct}>
                    <Image
                    style={styles.logo}
                    
                    
                  />
                  <Text>basmathi rice</Text>
                  <Text>rp100.0</Text>
                  <Text>Size:1.0kg    Qty:1</Text>
                </View>

            </View>
            </View>
            <View style={styles.smalldiv}>
        </View>
        <View style={styles.billdiv}> 
        <Text style={styles.billtext}>Sub total                                                     100.0</Text>
        <Text style={styles.billtext}>DeliverCharge                                             3.0</Text>
        <Text style={styles.billtext}>Total                                                             103.0</Text>
        </View>
        <View style={styles.smalldiv}>
        </View>
        
        <View style={styles.buttondiv}>

<Pressable style={styles.pressable1}>

 <Text style={styles.buttontext}>Submit</Text>

</Pressable>

</View>
        


    </View>

  )}

  const styles = StyleSheet.create({
    addresstext:{
        fontSize:20,
        paddingLeft:20,
        paddingTop:20
    },
    addresstext1:{
        paddingLeft:20,
        fontSize:15,
        paddingTop:5,
        color:'darkgrey'
    },
    addresstext2:{
        paddingLeft:20,
        fontSize:15,
        paddingTop:5,
        color:'darkgrey'

    },
    smalldiv:{
        height:7,
        backgroundColor:"lightgrey",
     },
     ordertracker:{
        height:70,
        
     },
     payment1:{
        fontSize:20,
        paddingLeft:20

     },
     paymentdiv:{
        
       
     },
     codtext:{
    height: 40,
      margin: 10,
      borderWidth: 1,
      padding: 10,

     },
     producttext:{
        fontSize:20,
        paddingLeft:20,
        paddingTop:10
     },
     logo:{
        height :50
     },
     finalproduct:{
        marginTop:20,
        marginLeft:20,
        height:200,
        width:150,
        borderWidth:1,
        marginBottom:10
     },
     rowdiv:{
        display:'flex',
        flexDirection:'row',
        
     },
     billdiv:{
        height:110,
        borderWidth:1,
        margin:20
     },
     billtext:{
        fontSize:17,
        paddingTop:10,
        color:'darkgrey',
        paddingLeft:10,
        fontWeight:'bold'
     },
     buttondiv:{
        height:30,
        alignItems:'center'
     },
     pressable1:{
        marginTop:20,
        height:30,
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

  }) 