import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'
import { Spacer } from '../../../../components/Spacer'
import CustomButton from '../../../../components/CustomButton'
import AccountExist from '../../../../components/AccountExist'
import { Montserrat } from '../../../../utils/Fonts'

const RegisterBottom = ({navigation}) => {
  return (
    <View>
   <AccountExist 
   txt1Font={9}
   txt2Font={9}
   textDecorationLine={true}
   txt1={"By registering, you are agree with our "}
    txt2="Terms & Conditions"
    onTxt2={()=>navigation.navigate("LoginScreen")}
    />
    <Spacer height={30} />
    <CustomButton title="Register" />
    <Spacer height={20} />
    <AccountExist txt1={"Don’t Have an Account?"}
    txt2="Login"
    onTxt2={()=>navigation.navigate("LoginScreen")}
    />

   
  </View>
   
  )
}

export default RegisterBottom

const styles = StyleSheet.create({})