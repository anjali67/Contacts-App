import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootStackParamList';
import styles from './styles';

 type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export default function SplashScreen() {
 const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('BottomTab'); 
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.main}>
      <LottieView
        source={require('../assets/lottie/3.json')}
        autoPlay
        loop={false}
        style={styles.lottie}
      />
    </View>
  );
}


