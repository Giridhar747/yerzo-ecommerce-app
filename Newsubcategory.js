import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TextInput,  Pressable, } from 'react-native';


export function Newsubcategory(){
   const [printtext,finalprint]=useState("")
   const[goals,setgoals]=useState([])

   function textinputhandler(text){
      finalprint(text)

   }

   function textoutputhandler(){
      setgoals((currentgoals)=>[...currentgoals,printtext])

   }

  return (
    <View>
      <View>

<Text style={styles.categorytext}>Category</Text>
<View style={styles.row}>
<TextInput
onChangeText={textinputhandler}

style={styles.input}
placeholder="Grocery"/>
<Pressable 

onPress={textoutputhandler}
style={styles.pressable}>

<Text style={styles.buttontext}>Add</Text>

</Pressable>



</View>

<View  style={styles.row}>
<TextInput
style={styles.input}
placeholder="Sub Category English*"
/>
<Pressable style={styles.pressable}>

<Text style={styles.buttontext}>Add</Text>

</Pressable>
</View>

<View  style={styles.row}>
<TextInput
style={styles.input}
placeholder="Sub Category Tamil*"
/> 
<Pressable style={styles.pressable}>

<Text style={styles.buttontext}>Add</Text>

</Pressable>  
</View>


</View>

<View style={styles.smalldiv}>

</View>

<View style={styles.categoryshowdiv}>

<Text style={styles.categoryshow}>Category Show</Text>

</View>


<View style={styles.smalldiv}>
</View>
<View style={styles.categoryshowdiv}>

<Text style={styles.categoryshow}>Images</Text>

</View>

<View style={styles.smalldiv1}>
   <Text style={{fontSize:20,paddingLeft:150,fontWeight:'bold'}} >List of items</Text>
         {goals.map((goal,i )=> <Text key={i} style={styles.displaytext}>{goal}</Text>)}

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
       width:300
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
      height:200
    },
    smalldiv1:{
      height:350,
       backgroundColor:"lightgrey",

    },
    row:{
      display:'flex',
      flexDirection:'row'
    },
    pressable:{
      marginTop:10,
      height:40,
      width:90,
      backgroundColor:'coral',
      alignItems:'center',
      borderRadius: 30

    },
    displaytext:{
      fontSize:20,
      paddingLeft:190
    }
 });