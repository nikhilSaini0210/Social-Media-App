import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '@components/global/CustomSafeAreaView';
import CustomText from '@components/ui/CustomText';
import {Fonts} from '@utils/Constants';
import ProgessBar from '@components/onBoarding/ProgessBar';
import MaskedText from '@components/ui/MaskedText';
import {RFValue} from 'react-native-responsive-fontsize';
import Footer from '@components/onBoarding/Footer';
import {navigate} from '@utils/NavigationUtils';
import {ROUTES} from '@navigation/Routes';

const OnBoardingA = () => {
  const isLoading = false;
  const handleGoogleSignIn = async () => {
    navigate(ROUTES.ONBOARD_B, {item: {pre: 25}});
  };
  return (
    <CustomSafeAreaView>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <ProgessBar progress={25} pre={0} />
          <View style={styles.maskedContainer}>
            <MaskedText
              title="Begin Your"
              fontFamily={Fonts.Regular}
              fontSize={RFValue(34)}
              gradientStyle={styles.gradietnStyle}
            />
            <MaskedText
              title="Mindful Journey"
              fontFamily={Fonts.Bold}
              fontSize={RFValue(34)}
              gradientStyle={styles.gradietnStyle}
            />
          </View>
          <CustomText
            fontSize={RFValue(13)}
            fontFamily={Fonts.Medium}
            style={styles.title}>
            Log in or sign up to begin your journey with personalized,
            human-like wellness support
          </CustomText>
        </View>

        <Footer onPress={handleGoogleSignIn} isLoading={isLoading} />
      </View>
    </CustomSafeAreaView>
  );
};

export default OnBoardingA;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  subContent: {
    paddingHorizontal: 34,
    marginTop: 30,
  },
  gradietnStyle: {
    height: 55,
  },
  maskedContainer: {
    marginTop: 40,
  },
  title: {
    color: '#000000',
    opacity: 0.5,
    textAlign: 'center',
    width: '96%',
    alignSelf: 'center',
  },
  googleButton: {
    backgroundColor: '#4285F4',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
});
