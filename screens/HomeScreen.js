
import * as React from 'react';
import { Image, Platform, StyleSheet,  View } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
         
     <View style={styles.welcomeContainer}>
       <Image
        source={
          __DEV__
           ? require('../assets/images/appleicon.png')
                : require('../assets/images/appleicon.png')
            }
           style={styles.welcomeImage}
          
          />
       
        </View>

    
      </View>

     );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width:700,
    height: 940,
    resizeMode: 'contain',
    marginTop: -180,
    marginLeft: 10,
  },
  }
);
