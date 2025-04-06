import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {navigate} from '@utils/NavigationUtils';
import {ROUTES} from '@navigation/Routes';

const SplashScreen = () => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate(ROUTES.ONBOARD_A);
    }, 1500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
