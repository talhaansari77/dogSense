import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from 'react-native-elements';
import {Montserrat} from '../../../../utils/Fonts';
import {Spacer} from '../../../../components/Spacer';
import {scale, verticalScale} from 'react-native-size-matters';
import {images} from '../../../../assets/images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').width;

const MyPets = ({item,borderColor}) => {
  return (
      <View >

    <View style={{...styles.mainContainer,backgroundColor:item.backColor,borderColor:borderColor}}>
      <View style={{padding: 20}}>
        <CustomText
          label={item.firstName}
          fontSize={15}
          color={colors.black}
          marginRight={5}
          fontFamily={Montserrat.Regular}
        />
        <CustomText
          label={item.lastName}
          fontSize={15}
          color={colors.black}
          marginRight={5}
          fontFamily={Montserrat.Light}
        />
      </View>
      <View style={{width: '100%', height: '60%'}}>
        <Image
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
          source={images.dog}
        />
      </View>
    </View>
    <View style={{...styles.topCircle,borderColor:borderColor}}>
    <View style={{...styles.topInnerCircle,backgroundColor:item.backColor,borderColor:borderColor}}>
        <Image resizeMode="contain" style={{width:22,height:22}} source={images.path}/>
        
        </View>

    </View>
    </View>

  );
};

export default MyPets;

const styles = StyleSheet.create({
  mainContainer: {
    width: width / 2,
    height: height / 1.5,
    borderRadius: scale(20),
    borderWidth: 1.8,
    // marginTop:10,
  
    borderColor: colors.white,
    // padding:10
  },
  topCircle:{
      width:verticalScale(45),
      height:verticalScale(45),
      borderColor: colors.white,
      borderRadius: 1000,
    //   borderWidth:1,
      borderLeftWidth:2,
      backgroundColor: "#f8f9fa",
      alignItems:"center",
      justifyContent:"center",
      padding:10,
     
      position:"absolute",
      top:-5,
      left:width / 2.6,
  },
  topInnerCircle:{
    width:verticalScale(40),
    height:verticalScale(40),
    borderRadius: 1000,
    borderWidth: 1.8,
    borderColor:colors.white,
    alignItems:"center",
    justifyContent:"center"

  }
});
