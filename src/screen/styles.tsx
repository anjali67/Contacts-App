import { StyleSheet } from "react-native";
import appColors from "../theme/appColors";
import { windowHeight } from "../theme/appConstant";

const styles = StyleSheet.create({
    container:{
         flex: 1, backgroundColor: appColors.white
    },
    center:{
     flex:1,alignItems:"center",justifyContent:"center"
    },
    main:{
    flex: 1,
    backgroundColor:appColors.white, 
    justifyContent: 'center',
    alignItems: 'center',
    },
    lottie: {
    width: windowHeight(150),
    height: windowHeight(150),
  },
})

export default styles