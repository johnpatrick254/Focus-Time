import React, { useState } from 'react'
import { View, Text,Vibration, StyleSheet } from 'react-native'
import { Countdown } from './countdown'
import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/fontsizes'
import { CustomButton } from './button'
import { ProgressBar } from 'react-native-paper'
import Timing from './timing'

export default function Timer({ focusSubject,clearSubject }) {
    const [isPaused, setIsPaused] = useState(true)
    const [isStarted, setIsStarted] = useState(true)
    const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
const onEnd=(reset)=>{
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    setMinutes(reset)
}
    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
       ONE_SECOND_IN_MS,
       ONE_SECOND_IN_MS,
       ONE_SECOND_IN_MS,
    ];

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    onProgress={(progress) =>setProgress(progress)}
                    onEnd={onEnd}
                    isPaused={isPaused}
                    minutes={minutes}
                />
                <View  style={{ paddingTop: spacing.xxl }}>
                    <Text style={styles.title}>Focus on: </Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
               <View style={{ paddingTop: spacing.xxl }}>
                    <ProgressBar
                    color={colors.secondaryText}
                    
                    />
                </View>
            </View>
            <View style={{ paddingTop: spacing.xxl,}}>
                    <ProgressBar
                    style={{height:6 }}
                    color={'#7071E8'}
                    progress={progress}
                    
                    />
                </View>
                <View  style={styles.timerWrapper}>
                <Timing
                onChangeTime={setMinutes}
                />
            </View>
            <View style={styles.buttonWrapper}>
                {
                 isStarted 
                 ?
                <CustomButton
                    name={"START"}
                    onPress={() => {
                        setIsPaused(false);
                        setIsStarted(false)
                    }}
                    type={"ROUNDED"}
                    size={110}
                     

                />
                :
                <CustomButton
                    name={"STOP"}
                    onPress={() => {
                        setIsPaused(true)
                        setIsStarted(true)

                    }}
                    type={"ROUNDED"}
                    size={110}

                />}
            </View>
            <View style={styles.clearSubject}>
                <CustomButton
                    name={"-"}
                    onPress={clearSubject}
                    type={"ROUNDED"}
                    size={70}
                     

                />
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    countdown: {
        flex: 0.45,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: "row",
        padding: spacing.sm,
        alignItems: "center",
        justifyContent: "center"

    },
    timerWrapper: {
        flex: 0.2,
        flexDirection: "row",
        paddingTop: spacing.lg,
        alignItems: "center",
        justifyContent: "center"

    },
    title: {
        fontSize: fontSizes.lg,
        color: "white",
        fontWeight: "bold",
        textAlign: 'center'
    },
    task: {
        fontSize: fontSizes.lg,
        color: "white",
        textAlign: 'center'

    },
    clearSubject:{
        flex:0.2,
        flexDirection:"row",
        justifyContent:"center"
    }
})