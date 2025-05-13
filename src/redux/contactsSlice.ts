import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Contacts, { Contact } from 'react-native-contacts';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Async thunk to load favorites from AsyncStorage
export const loadFavorites = createAsyncThunk(
  'contacts/loadFavorites',
  async () => {
    const stored = await AsyncStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  }
);

// Async thunk to save favorites to AsyncStorage
export const saveFavorites = createAsyncThunk(
  'contacts/saveFavorites',
  async (_, { getState }: any) => {
    const { contacts } = getState();
    await AsyncStorage.setItem('favorites', JSON.stringify(contacts.favorites));
  }
);

// Async thunk to fetch all contacts
export const fetchContacts = createAsyncThunk<Contact[]>(
  'contacts/fetch',
  async () => {
    const contacts = await Contacts.getAll();
    return contacts;
  }
);

// State structure
export interface ContactsState {
  data: Contact[];
  favorites: string[];
  loading: boolean;
  searchQuery: string;
}

const initialState: ContactsState = {
  data: [],
  favorites: [],
  loading: false,
  searchQuery: '',
};

// Slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      const id = action.payload;
      const index = state.favorites.indexOf(id);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(id);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

// Exports
export const { setSearchQuery, toggleFavorite } = contactsSlice.actions;
export default contactsSlice.reducer;
