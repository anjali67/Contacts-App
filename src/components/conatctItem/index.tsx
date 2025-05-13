import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Contact } from 'react-native-contacts';
import { useDispatch } from 'react-redux';
import { saveFavorites, toggleFavorite } from '../../redux/contactsSlice';
import LottieView from 'lottie-react-native';
import { Star } from '../../assets/icons/star';
import { AppDispatch } from '../../redux/store';
import styles from './styles';
import { getRandomColor,getInitial } from '../../utils/helpers';

export default function ContactItem({ contact, isFavorite }: { contact: Contact; isFavorite: boolean }) {
  const dispatch = useDispatch<AppDispatch>();
  const avatarBgColor = useMemo(() => getRandomColor(), []);
  
  const handleFavorite = () => {
  dispatch(toggleFavorite(contact.recordID));
  dispatch(saveFavorites()); 
};

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          {!/^\+?\d[\d\s\-()]+$/.test(contact.displayName) && (
           <View style={[styles.avtarIcon,{backgroundColor:avatarBgColor}]}>
               <Text style={styles.name}>{getInitial(contact.displayName)}</Text>
           </View>
          )}
          <View style={styles.mainContainer}>
            {contact.displayName && (
              <Text style={styles.name}>
                  {contact.displayName}
             </Text>
             )}
           {contact.phoneNumbers?.length > 0 &&
                 contact.phoneNumbers[0]?.number &&
                   contact.displayName !== contact.phoneNumbers[0]?.number && (
                    <Text style={styles.phone}>
                      {contact.phoneNumbers[0]?.number}
                 </Text>
              )}
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleFavorite()}>
       {isFavorite ? (
       <LottieView
          source={require('../../assets/lottie/2.json')}
          autoPlay
          loop={false}
          style={styles.lottie}
          progress={isFavorite ? 1 : 0}
      />
     ) : (
  <Star fillColor={'white'} />
    )}
  </TouchableOpacity>
</View>
  );
}


