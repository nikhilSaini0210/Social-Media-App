import {DimensionValue, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  progress: DimensionValue;
}

const ProgessBar: FC<Props> = ({progress}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.progressBar, {width: progress}]}
        colors={['#F3A8CE', '#F7B174']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
      />
    </View>
  );
};

export default ProgessBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 5,
    borderRadius: 50,
    backgroundColor: '#78788029',
  },
  progressBar: {
    height: '100%',
    borderRadius: 50,
  },
});
