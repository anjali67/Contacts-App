import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import { windowHeight, windowWidth } from "../../theme/appConstant";
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: windowHeight(15),
    marginHorizontal: 16,
    paddingVertical:windowHeight(12),
    marginVertical: windowHeight(5),
    borderRadius: 16,
    backgroundColor: appColors.gray,
    alignItems: 'center',
    shadowColor: appColors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  container:{
    flex:1
  },
  textContainer:{
    flexDirection:"row",alignItems:"center",
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: appColors.font,
  },
  phone: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  lottie: {
    width: 40,
    height: 40,
    left:10
  },
  avtarIcon:{
    backgroundColor:appColors.activeTab,
    height:35,
    width:35,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:windowWidth(2)
  },
  mainContainer:{
    marginHorizontal:10
  }
});

export default styles