import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import fonts from "../../theme/appFonts";
import { fontSizes, windowHeight, windowWidth } from "../../theme/appConstant";

const styles = StyleSheet.create({
    container:{
  padding: 15,
  marginHorizontal:windowWidth(20),
  marginTop:windowHeight(10)
    },
    title:{
        color:appColors.black,
        fontFamily:fonts.RobotoBold,
        fontSize:fontSizes.FONT25
       
    }
})

export default styles