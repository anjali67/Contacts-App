import { View,Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import styles from './styles';

export default function NoContact(props:{title:string}) {
  return (
    <View style={styles.lottieView}>
    <LottieView
      source={require('../../assets/lottie/1.json')}
      style={{ height: 200, width: 200 }}
      autoPlay
      loop
    />
    <Text style={styles.textStyle}>
    {props.title}
    </Text>
  </View>
  )
}