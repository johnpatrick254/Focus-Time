
import { StyleSheet, Platform, StatusBar,SafeAreaView, View ,Text } from 'react-native';
import { colors } from './src/utils/colors';
import { FocusTime } from './src/components/Focus';
import { useState } from 'react';
import { fontSizes } from './src/utils/fontsizes';
import Timer from './src/components/timer';
import { useKeepAwake } from 'expo-keep-awake';
import FocusHistory from './src/components/FocusHistory';

export default function App() {
  const [focusItem, setFocusItem] = useState("")
  const [focusSubject, setFocusSubject] = useState('')
  const [focusItems, setFocusItems] = useState([])
  useKeepAwake()

  return (
    <SafeAreaView style={styles.container}>
     {(focusSubject.length === 0) ? 
      <>
      <FocusTime
      focusItem={focusItem}
      setFocusItem={setFocusItem}
      setFocusItems={setFocusSubject}
      addFocusHistory={setFocusItems}
      />
      <FocusHistory
    history={focusItems}
    />
      </>
      :
        <Timer  
        focusSubject={focusSubject}
        onTimerEnd={()=>{}}
        clearSubject={()=>{setFocusSubject('')}}
        />
         
      
    }
    
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {  //class name is container
    flex: 1,
    backgroundColor: colors.primaryBg,
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight:""
  },
  text:{
    fontSize: fontSizes.lg,
    color: colors.primaryText,

}
});
