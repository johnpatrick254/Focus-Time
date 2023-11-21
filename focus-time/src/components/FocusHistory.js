 import React from 'react'
import { View,Text,StyleSheet,FlatList} from 'react-native'
import { fontSizes, spacing } from '../utils/fontsizes';
 
 export default function FocusHistory({history}) {
    if(!history) return null;
    const renderStructure = ({item})=><Text style={styles.item}>{item}</Text>
   return (
     <View style={styles.container}>
        <Text style={styles.title}>Focus history</Text>
        {
            <FlatList
            data={history}
            renderItem={renderStructure}
            />
            
        }
     </View>
   )
 }
 const styles= StyleSheet.create({
    container:{
        padding:spacing.lg,
        flex:1
    },
    title:{
        color:"white",
        fontSize:fontSizes.md,
        fontWeight:"bold"
    },
    item:{
        color:"white",
        fontSize:fontSizes.md,
       
    }
 })