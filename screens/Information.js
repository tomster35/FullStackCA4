import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        icon="md-happy"
        label="How to stay positive"
        onPress={() => WebBrowser.openBrowserAsync('https://theconsciouslife.com/stay-positive-tough-times.htm')}
      />

      <OptionButton
        icon="md-headset"
        label="Songs to Chill out to"
        onPress={() => WebBrowser.openBrowserAsync('https://www.vogue.com/article/best-songs-to-chill-out-to-ambient-music-playlist')}
      />

      <OptionButton
        icon="ios-document"
        label="Articles to Busy"
        onPress={() => WebBrowser.openBrowserAsync('https://www.hellomagazine.com/healthandbeauty/health-and-fitness/2020031686372/things-to-do-if-self-isolating-at-home/')}
        isLastOption
      />
       <OptionButton
        icon="md-fitness"
        label="Ways to stay healthy"
        onPress={() => WebBrowser.openBrowserAsync('https://www.active.com/fitness/articles/5-simple-tips-for-fitness-success')}
      />

      <OptionButton
        icon="md-compass"
        label="Dream places to go"
        onPress={() => WebBrowser.openBrowserAsync('https://roarloud.net/2016/12/19/dream-destinations-around-the-world/')}
      />

      <OptionButton
        icon="md-egg"
        label="Diets to follow"
        onPress={() => WebBrowser.openBrowserAsync('https://upfitness.com/fat-loss/losing-fat/8-steps-get-shredded-summer/')}
        isLastOption
      />
     

      <OptionButton
        icon="md-school"
        label="Facts to learn"
        onPress={() => WebBrowser.openBrowserAsync('https://bestlifeonline.com/world-facts/')}
      />

   
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="#06161c" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06161c',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#b9c5c9',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
