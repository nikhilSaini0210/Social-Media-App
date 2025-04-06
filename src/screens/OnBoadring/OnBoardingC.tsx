import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const OnBoardingC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>Choose the </Text>
      <MaskedView
        maskElement={
          <Text style={[styles.normalText, styles.gradientText]}>identity</Text>
        }>
        <LinearGradient
          colors={['#F7B174', '#F3A8CE']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={[styles.normalText, styles.gradientText, {opacity: 0}]}>
            identity
          </Text>
        </LinearGradient>
      </MaskedView>
      <Text style={styles.normalText}> that feels right for you?</Text>
    </View>
  );
};

export default OnBoardingC;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
  normalText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  gradientText: {
    fontWeight: '700',
  },
});
