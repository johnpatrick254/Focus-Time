import { View, Text, StyleSheet } from "react-native"
import { colors } from "../utils/colors"
import { TextInput } from "react-native-paper"
import { CustomButton } from "./button"
import { spacing } from "../utils/fontsizes"
export const FocusTime = ({focusItem,setFocusItem,setFocusItems}) => {

    return <>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    label="Add something to focus"
                    value={focusItem}
                    onChangeText={(text) => {
                        setFocusItem(text)
                    }}
                    style={styles.text}>
                </TextInput>
                <CustomButton
                    name={'+'}
                    type={"ROUNDED"}
                    size={50}
                    onPress={() => {
                        setFocusItems(prev => ([...prev, focusItem]));
                        setFocusItem('');
                    }}
                />
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    inputContainer: {
        padding:spacing.lg,
        flexDirection:"row",
        justifyContent:"top",
        alignItems:"center"
        
    },
    text: {
        flex:1,
        color: colors.primaryText,
        width: "auto",
        marginRight:spacing.sm
    }
})