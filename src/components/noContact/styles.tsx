import { StyleSheet } from 'react-native';
import appColors from '../../theme/appColors';
import fonts from '../../theme/appFonts';
import { fontSizes } from '../../theme/appConstant';

const styles = StyleSheet.create({
  lottieView:{
       flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
     textStyle:{
            color:appColors.black,
            fontFamily:fonts.RobotoRegular,
            fontSize:fontSizes.FONT20HALF
        },
});

export default styles;
