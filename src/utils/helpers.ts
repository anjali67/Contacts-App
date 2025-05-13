import { PermissionsAndroid, Platform } from 'react-native';

export const requestContactsPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') return true;

  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS
  );
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

export const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`; // pastel tone
};

export const getInitial = (text: string) => (text ? text.charAt(0).toUpperCase() : '?');


