import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '@components/global/CustomSafeAreaView';
import CustomButton from '@components/ui/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '@components/ui/CustomText';
import {Fonts} from '@utils/Constants';
import ProgessBar from '@components/onBoarding/ProgessBar';
import MaskedView from '@react-native-masked-view/masked-view';

const OnBoardingA = () => {
  const isLoading = false;
  const handleGoogleSignIn = async () => {};
  return (
    <CustomSafeAreaView>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <ProgessBar progress="25%" />
          <Text style={styles.title}>Social Media Authentication</Text>
          <Text style={styles.subtitle}>
            Sign in with your social media accounts
          </Text>
          <MaskedView
            maskElement={
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  color: 'black', // Only mask uses this
                  textAlign: 'center',
                }}>
                Gradient Text
              </Text>
            }>
            <LinearGradient
              colors={['#F7B174', '#F3A8CE']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{height: 40}} // Must match the height of text
            />
          </MaskedView>

          {/* {error && <Text style={styles.errorText}>{error}</Text>} */}
        </View>

        <LinearGradient
          style={{
            width: '100%',
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            position: 'absolute',
            bottom: 0,
            paddingHorizontal: 30,
            paddingTop: 25,
            paddingBottom: 40,
          }}
          colors={['#F3A8CE', '#F7B174']}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 1}}>
          <View style={styles.socialButtonsContainer}>
            <View
              style={{
                width: 64,
                height: 22,
                borderWidth: 1,
                borderColor: '#FFFFFF4D',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                flexDirection: 'row',
                gap: 4,
                elevation: 1,
              }}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 50,
                }}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: '##FFFFFF4D',
                  borderRadius: 50,
                  borderWidth: 0.2,
                  borderColor: '#FFFFFF',
                }}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 50,
                }}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 50,
                }}
              />
            </View>
            <CustomButton
              title="Countinue with Google"
              disabled={false}
              loading={isLoading}
              onPress={handleGoogleSignIn}
              icon={require('@assets/images/google.png')}
              bgColor="#000000"
              textColor="#FFF"
              style={{
                marginTop: 25,
              }}
            />

            <CustomButton
              title="Countinue with Google"
              disabled={false}
              loading={isLoading}
              onPress={handleGoogleSignIn}
              icon={require('@assets/images/google.png')}
              bgColor="#FFFFFF"
              textColor="##0000008A"
              style={{
                marginTop: 15,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 28,
              }}>
              <View
                style={{
                  width: '40%',
                  height: 1.5,
                  backgroundColor: '#FFFFFF80',
                  borderRadius: 50,
                  //   borderWidth: 1.5,
                  //   borderColor: '#FFFFFF80',
                }}
              />
              <CustomText
                variant="h6"
                fontFamily={Fonts.SemiBold}
                style={{
                  color: '#FFFFFF',
                }}>
                Or
              </CustomText>
              <View
                style={{
                  width: '40%',
                  height: 1.5,
                  backgroundColor: '#FFFFFF80',
                  borderRadius: 50,
                  //   borderWidth: 1.5,
                  //   borderColor: '#FFFFFF80',
                }}
              />
            </View>
            <CustomText
              variant="h6"
              fontFamily={Fonts.SemiBold}
              style={{
                textAlign: 'center',
                color: '#FFFFFF',
              }}>
              I agree to{' '}
              <CustomText
                variant="h6"
                fontFamily={Fonts.SemiBold}
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  textDecorationLine: 'underline',
                }}>
                Privacy Policy
              </CustomText>{' '}
              &{' '}
              <CustomText
                variant="h6"
                fontFamily={Fonts.SemiBold}
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  textDecorationLine: 'underline',
                }}>
                Terms of Service
              </CustomText>
            </CustomText>
          </View>
        </LinearGradient>
      </View>
    </CustomSafeAreaView>
  );
};

export default OnBoardingA;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },
  subContent: {
    paddingHorizontal: 34,
    marginTop: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  socialButtonsContainer: {
    width: '100%',
    // marginTop: 20,
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
