import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavorites } from '../redux/contactsSlice';
import ContactItem from '../components/conatctItem';
import { RootState, AppDispatch } from '../redux/store';
import { requestContactsPermission } from '../utils/helpers';
import styles from './styles';
import NoContact from '../components/noContact';
import appColors from '../theme/appColors';
import Header from '../components/header';

export default function FavouriteListScreen() {
  const [visibleCount, setVisibleCount] = useState(20);
  const dispatch = useDispatch<AppDispatch>();
  const { data: contacts, favorites, loading } = useSelector(
    (state: RootState) => state.contacts
  );

useEffect(() => {
  const init = async () => {
    await requestContactsPermission();
    dispatch(loadFavorites()); 
  };
  init();
}, [dispatch]);

  const favoriteContacts = contacts.filter((contact) =>
    favorites.includes(contact.recordID)
  );

  return (
    <SafeAreaView style={styles.container}>
       <Header title={'Favorite Contacts'}/>
      {loading ? (
      <View style={styles.center}>
          <ActivityIndicator color={appColors.black} size="large"/>
        </View>
      ) :  favoriteContacts.length === 0 ? (
      <NoContact title={'No favorites contacts'}/>
      ) : (
        <FlatList
          data={favoriteContacts.slice(0, visibleCount)}
          onEndReached={() => setVisibleCount((prev) => prev + 20)}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => item.recordID}
          renderItem={({ item }) => (
            <ContactItem contact={item} isFavorite={favorites.includes(item.recordID)} />
          )}
        />
      )}
    </SafeAreaView>
  );
}
