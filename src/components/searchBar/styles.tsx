import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowHeight(15),
    paddingBottom:windowHeight(14),
    paddingTop:windowHeight(3)
  },
  input: {
    backgroundColor: '#E6E9F0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#d1d9e6',
  },
});

export default styles