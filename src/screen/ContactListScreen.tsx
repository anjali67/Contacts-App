import React, { useEffect , useState} from 'react';
import { View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsSlice';
import ContactItem from '../components/conatctItem';
import SearchBar from '../components/searchBar';
import { RootState, AppDispatch } from '../redux/store';
import { requestContactsPermission } from '../utils/helpers';
import NoContact from '../components/noContact';
import styles from './styles';
import Header from '../components/header';
import appColors from '../theme/appColors';

export default function ContactListScreen() {
  const [visibleCount, setVisibleCount] = useState(20);

  const dispatch = useDispatch<AppDispatch>();
  const { data: contacts, favorites, loading, searchQuery } = useSelector(
    (state: RootState) => state.contacts
  );

  useEffect(() => {
  const init = async () => {
    await requestContactsPermission();
    dispatch(fetchContacts());
  };
  init();
  }, [dispatch]);

  const filteredContacts = contacts
    .filter((c) => c.displayName?.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (a.displayName || '').localeCompare(b.displayName || ''));

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Contacts'}/>
      <SearchBar /> 
       {loading ? (
       <View style={styles.center}>
          <ActivityIndicator size="large" color={appColors.black}/>
        </View>
      ) :  filteredContacts.length === 0 ? (
             <NoContact title={'No contacts'}/>
            ) :  (
        <FlatList
        data={filteredContacts.slice(0, visibleCount)}
        onEndReached={() => setVisibleCount(prev => prev + 20)} 
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
