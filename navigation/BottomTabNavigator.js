import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Information from '../screens/Information';
import Picture from '../screens/Picture';



const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route}) {
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
          
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
         
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
      
        <BottomTab.Screen
           name="Image"
        component={Picture}
        options={{
          title: 'Image',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-image" />,
        }}
      />
       <BottomTab.Screen
           name="Info"
        component={Information}
        options={{
          title: 'Informartion',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-eye"  />,
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
      case 'Info':
        return 'Information Links';
        case 'Image':
        return 'Images';
   
     
  }
}
    
 

