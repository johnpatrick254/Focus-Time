import React from 'react'
import { View,StyleSheet} from 'react-native'
import { CustomButton } from './button'

export default function Timing({onChangeTime}) {
  return <>
    <View
    style={styles.timingButton}
    >
    <CustomButton
    name={10}
    type={"ROUNDED"}
    onPress={()=>onChangeTime(10)}
    size={70}
    />
    </View>
    <View
    style={styles.timingButton}
    >
    <CustomButton
    name={15}
    type={"ROUNDED"}
    onPress={()=>onChangeTime(15)}
    size={70}
    />
    </View>
    <View
    style={styles.timingButton}
    >
    <CustomButton
    name={20}
    type={"ROUNDED"}
    onPress={()=>onChangeTime(20)}
    size={70}
    />
    </View>
  </>
}

const styles = StyleSheet.create({
    timingButton:{
        flex:1,
        alignItems:'center',
    
    }
})