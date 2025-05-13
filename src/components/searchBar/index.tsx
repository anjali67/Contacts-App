import React from 'react';
import { TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/contactsSlice';
import styles from './styles';
import appColors from '../../theme/appColors';

export default function SearchBar() {
  const dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="🔍 Search Contacts"
        placeholderTextColor={appColors.placeholder}
        onChangeText={text => dispatch(setSearchQuery(text))}
        style={styles.input}
      />
    </View>
  );
}


