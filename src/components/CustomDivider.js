import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'
import { colors } from '../utils/Colors'

const CustomDivider = (height) => {
  return (
    <View style={{
        width: "100%",
        height:verticalScale(1),
        backgroundColor:colors.grey
      }}>
    </View>
  )
}

export default CustomDivider

const styles = StyleSheet.create({})