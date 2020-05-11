import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Home: 'home',
        Links: 'links',
        Info: 'Information',
        Image: 'Image',
        Timeline: 'timeline',
     
      },
    },
  },
};
