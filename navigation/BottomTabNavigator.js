import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import { StyleSheet, View } from 'react-native';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
         
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Diary',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      
    </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Welcome to my App';
    case 'Links':
      return 'Diary App';
     
  }
}



const styles = StyleSheet.create({
  footer: {
      position: 'absolute',
      width: '100%',
      height: 155,
      bottom: -30,
  },
  footerInner: {
      position: 'relative',
      width: '100%',
      height: '90%',
  },
  btn: {
      zIndex: 1,
      position: 'absolute',
      right: 0,
      top: -60,
      width: 100,
      height: 100,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 6,
      borderColor: 'grey',
      backgroundColor: 'black'
  },
  btnText: {
      color: 'orange',
      fontSize: 40,
  },
  textInput: {
      zIndex: 0,
      flex: 1,
      padding: 20,
      fontSize: 16,
      color: '#fff',
      backgroundColor: '#262526'
  }
});