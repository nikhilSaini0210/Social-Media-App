import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '@components/global/CustomSafeAreaView';
import OnBoardingA from '@screens/OnBoadring/OnBoardingA';

const App = () => {
  return (
    <CustomSafeAreaView>
     <OnBoardingA />
    </CustomSafeAreaView>
  );
};

export default App;
