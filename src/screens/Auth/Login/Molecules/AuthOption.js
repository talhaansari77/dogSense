import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import {Montserrat} from '../../../../utils/Fonts';
import CustomTextInput from '../../../../components/CustomTextInput';
import {Spacer} from '../../../../components/Spacer';
import {icons} from '../../../../assets/icons';
import CustomButton from '../../../../components/CustomButton';

const AuthOption = ({txt1,txt2}) => {
  return (
    <View>
      <CustomText
        label={txt1}
        fontSize={20}
        color={colors.black}
        fontFamily={Montserrat.Regular}
      />
      <Spacer height={10} />
      <CustomText
        label={txt2}
        fontSize={11}
        color={colors.grayLight}
        fontFamily={Montserrat.Light}
      />
    </View>
  );
};

export default AuthOption;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '100%',
    height: '72%',
    borderRadius: scale(40),
    padding: '15@s',
    backgroundColor: colors.white,

    shadowColor: Platform.OS == 'ios' ? '#ced4da' : colors.black,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    shadowOpacity: 0.5,

    shadowOffset: {width: 3, height: 5},
  },
});
