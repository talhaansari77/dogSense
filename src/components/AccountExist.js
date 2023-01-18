import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import { colors } from '../utils/Colors'
import { Montserrat } from '../utils/Fonts'

const AccountExist = ({txt1,txt2,onTxt2,txt1Font,textDecorationLine,txt2Font}) => {
  return (
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>

      <CustomText
        label={txt1}
        fontSize={txt1Font || 12}
        color={colors.grayLight}
        marginRight={5}
        fontFamily={Montserrat.Regular}
      />
        <CustomText
        label={ txt2}
        onPress={onTxt2}
        fontSize={ txt2Font ||12}
        textDecorationLine={textDecorationLine}
        color={colors.primary}
        
        alignSelf="flex-end"
        
        fontFamily={Montserrat.Regular}
      />

      </View>
  )
}

export default AccountExist

const styles = StyleSheet.create({})