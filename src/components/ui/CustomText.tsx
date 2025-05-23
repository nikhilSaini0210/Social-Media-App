import {StyleSheet, Text, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, Fonts} from '@utils/Constants';

interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'h9'
    | 'body';
  children?: React.ReactNode;
  fontFamily?: Fonts;
  fontSize?: number;
  style?: TextStyle | TextStyle[];
  numberOfLine?: number;
  onLayout?: (event: object) => void;
}

const CustomText: FC<Props> = ({
  variant,
  children,
  fontFamily = Fonts.Regular,
  fontSize,
  style,
  numberOfLine,
  onLayout,
  ...props
}) => {
  let computedFontSize: number;

  switch (variant) {
    case 'h1':
      computedFontSize = RFValue(fontSize || 22);
      break;
    case 'h2':
      computedFontSize = RFValue(fontSize || 20);
      break;
    case 'h3':
      computedFontSize = RFValue(fontSize || 18);
      break;
    case 'h4':
      computedFontSize = RFValue(fontSize || 16);
      break;
    case 'h5':
      computedFontSize = RFValue(fontSize || 14);
      break;
    case 'h6':
      computedFontSize = RFValue(fontSize || 12);
      break;
    case 'h7':
      computedFontSize = RFValue(fontSize || 11);
      break;
    case 'h8':
      computedFontSize = RFValue(fontSize || 10);
      break;
    case 'h9':
      computedFontSize = RFValue(fontSize || 9);
      break;
    default:
      computedFontSize = RFValue(fontSize || 12);
  }

  const fontFamilyStyle = {
    fontFamily,
  };

  return (
    <Text
      onLayout={onLayout}
      style={[
        styles.text,
        {color: Colors.text, fontSize: computedFontSize},
        style,
        fontFamilyStyle,
      ]}
      numberOfLines={numberOfLine !== undefined ? numberOfLine : undefined}
      {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});
