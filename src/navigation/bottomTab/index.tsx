import React from 'react';
import { View } from 'react-native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import styles from './styles';
import appColors from '../../theme/appColors';
import appfonts from '../../theme/appFonts';
import { fontSizes } from '../../theme/appConstant';
import ContactListScreen from '../../screen/ContactListScreen';
import FavouriteListScreen from '../../screen/FavouriteListScreen';
import { People } from '../../assets/icons/people';
import { Star } from '../../assets/icons/star';

const Tab = AnimatedTabBarNavigator();

const BottomTab = () => {
  return (
    <View style={styles.tabContainer}>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor:appColors.activeTab,
          labelStyle: {
            color:appColors.white,
            fontFamily: appfonts.RobotoMedium,
            fontSize: fontSizes.FONT19,
            
          },
        }}
        appearance={{
          tabBarBackground:appColors.black,
          shadow: true,
          floating: true,
        }}
      >
        <Tab.Screen
          name="Contact"
          component={ContactListScreen}
          options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ focused }: {focused : boolean}) => ( <People color={focused ? appColors.white : '#8F8FB2'}  />),
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteListScreen}
          options={{
            tabBarLabel: 'Favourites',
            tabBarIcon: ({ focused }:  {focused : boolean}) => ( <Star color={focused ? appColors.white : '#8F8FB2'}  />),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTab;
