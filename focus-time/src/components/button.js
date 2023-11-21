import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { colors } from "../utils/colors"
import { fontSizes, spacing } from "../utils/fontsizes.js"


export const CustomButton = ({ name,type, onPress,size=0 }) => {
    const buttonStyles = StyleSheet.create({
    roundButton: {
        height: size,
        width: size ,
        borderRadius: size/2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondaryBg,
        borderWidth: 2,
        borderColor:"white",
        marginLeft:spacing.sm
    
        
    },
    squareButton:{
        padding:4,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondaryBg,
        borderWidth: 2,
        borderColor:colors.primaryText,
        marginLeft:spacing.sm
    
    },
    text:{
        fontSize: fontSizes.xl,
        color: colors.primaryText,
        alignSelf:"center",
        textAlign:"center"
     

    }
})
    return (
        <TouchableOpacity
            onPress={onPress}
            style={type === "ROUNDED" ? buttonStyles.roundButton : buttonStyles.squareButton}
            
        >
            <Text
            style={buttonStyles.text}
               
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}

