import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Montserrat} from '../../../../utils/Fonts';
import { icons } from '../../../../assets/icons';

const ViewMore = ({txt,textColor}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <CustomText
        label={txt}
        fontSize={15}
        color={textColor}
        fontWeight={'bold'}
        marginRight={5}
        fontFamily={Montserrat.Regular}
      />
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <CustomText
        label={'View More'}
        fontSize={10}
        color={colors.primary}
        marginRight={5}
        fontFamily={Montserrat.Regular}
      />
      <Image source={icons.next}
      resizeMode="contain"
       style={{width:10,height:10}}/>


      </View>
    </View>
  );
};

export default ViewMore;

const styles = StyleSheet.create({});
