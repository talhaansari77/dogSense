import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Montserrat} from '../../../../utils/Fonts';
import {Spacer} from '../../../../components/Spacer';
import CustomButton from '../../../../components/CustomButton';
import AccountExist from '../../../../components/AccountExist';

const LoginBottom = ({navigation}) => {
  return (
    <View>
      <CustomText
        label={'Forgot password?'}
        fontSize={12}
        onPress={()=>navigation.navigate("ForgetPassword")}
        color={colors.grayLight}
        alignSelf="flex-end"
        fontFamily={Montserrat.Light}
      />
      <Spacer height={30} />
      <CustomButton
      onPress={()=>navigation.navigate("MainStack")}
       title="Log in" />
      <Spacer height={20} />
      <AccountExist txt1={"Don’t Have an Account?"}
      txt2="Register"
      onTxt2={()=>navigation.navigate("Register")}
      />

     
    </View>
  );
};

export default LoginBottom;

const styles = StyleSheet.create({});
