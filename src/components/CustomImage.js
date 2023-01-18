import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import { colors } from '../utils/Colors';
import commonStyles from '../utils/CommonStyles';
import { scale } from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');

const CustomImage = ({picture,viewWidth,viewHeight}) => {
  return (
    <View style={{
        width: viewWidth|| width / 2,
        height:  viewHeight|| height / 5,
        borderRadius: scale(20),
        borderWidth: 1.8,
        borderColor: colors.white,
        overflow:"hidden"

    }}>
              <Image style={commonStyles.img} source={picture} />


    </View>
  )
}

export default CustomImage

const styles = StyleSheet.create({
  

})